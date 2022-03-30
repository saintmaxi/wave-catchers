// a saintmaxi joint
// onChainDiscordDirectory created by @0xInuarashi

async function displayErrorMessage(message, timed=true) {
    if (!($("#error-popup").length)) {
        let fakeJSX = `<div id="error-popup"><p>${message}</p></div>`;
        $("body").append(fakeJSX);
        let height = $(document).height();
        $("body").append(`<div id='block-screen-error' style="height:${height}px"></div>`);
        if (timed) {
            await sleep(2500);
            $("#error-popup").remove();
            $("#block-screen-error").remove();
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function displayLoading() {
    if (!($("#loading-popup").length)) {
        // let fakeJSX = `<div id="loading-popup"></div>`;
        // $("body").append(fakeJSX);
        let height = $(document).height();
        $("body").append(`<div id='block-screen-loading' style="height:${height}px"></div>`);
    }
}

function showLive() {
    $('#past-collections').addClass('hidden');
    $('#live-collections').removeClass('hidden');
    $("#scroll-indicator-past").addClass("hidden");
    $("#scroll-indicator-live").removeClass("hidden");
    $("#live-button").addClass("active");
    $("#past-button").removeClass("active");
}

function showPast() {
    $('#live-collections').addClass('hidden');
    $('#past-collections').removeClass('hidden');
    $("#scroll-indicator-past").removeClass("hidden");
    $("#scroll-indicator-live").addClass("hidden");
    $("#past-button").addClass("active");
    $("#live-button").removeClass("active");
}

function showLiveRaffles() {
    $('#past-raffles').addClass('hidden');
    $('#live-raffles').removeClass('hidden');
    $("#live-button").addClass("active");
    $("#past-button").removeClass("active");
}

function showPastRaffles() {
    $('#live-raffles').addClass('hidden');
    $('#past-raffles').removeClass('hidden');
    $("#past-button").addClass("active");
    $("#live-button").removeClass("active");
}

function toggleMenu() {
    const el = document.getElementById("mobile-nav-menu")
    el.classList.toggle('expanded')
    el.classList.toggle('collapsed')
 }

 function clearPendingTxs() {
    localStorage.removeItem("WaveCatchersPendingTxs");
    localStorage.removeItem("CocoMarketPendingTxs");
    localStorage.removeItem("CocoPendingTxs");
    pendingTransactions.clear();
    location.reload();
};

const loadInfuraListings = async() => {
    const listings = await fetch(`https://www.wavecatchers.io/.netlify/functions/listings?get=true`).then(res => res.text());
    const jsonData = listings ? JSON.parse(listings) : [];
    $("#live-collections").empty();
    $("#past-collections").empty();
    $("#live-collections").append(jsonData.liveJSX);
    $("#past-collections").append(jsonData.pastJSX);
    $("#num-live").text(` (${jsonData.numLive})`);
    $("#num-past").text(` (${jsonData.numPast})`);
    if (jsonData.numLive > 4) {
        $("#scroll-indicator-live").html(`<img class="down-arrow" src="images/down-arrow.png"> SCROLL<span class="hide-on-mobile"> FOR MORE</span> <img class="down-arrow" src="images/down-arrow.png">`);
    }
    if (jsonData.numPast > 4) {
        $("#scroll-indicator-past").html(`<img class="down-arrow" src="images/down-arrow.png"> SCROLL <span class="hide-on-mobile"> FOR MORE</span> <img class="down-arrow" src="images/down-arrow.png">`);
    }
}

const loadInfuraRaffles = async() => {
    const raffles = await fetch(`https://www.wavecatchers.io/.netlify/functions/raffles?get=true`).then(res => res.text());
    const jsonData = raffles ? JSON.parse(raffles) : [];
    if (jsonData.currentRaffle.raffleLive == false) {
        $("#raffle-title").html("No raffles live!");
    }
    else {
        $("#raffle-title").html(jsonData.currentRaffle.raffleTitle);
        $("#current-raffle-img").attr("src", jsonData.currentRaffle.raffleImg);
        $("#base-raffle-price").html(jsonData.currentRaffle.rafflePrice);
        $("#total-entries").html(`Total Entries: ${jsonData.currentRaffle.totalEntries}`);
        $("#entry-num").addClass("hidden");
        if (jsonData.currentRaffle.capped) {
            $("#total-price").addClass("hidden");
            $("#max-msg").html("Max 1 entry!");
        }
        else {
            $("#total-price").removeClass("hidden");
            $("#max-msg").html(`Unlimited entries!`);
        }
    }
    $("#past-raffles").empty();
    $("#past-raffles").append(jsonData.pastRaffles.pastJSX);
    $("#num-past").text(` (${jsonData.pastRaffles.numPast})`);
    $("#enter-button").addClass("hidden");
    $("#enter-with-name-button").addClass("hidden");
    $("#connect-button").removeClass("hidden");
}

// ======= DISCORD UTILS ========

const identityMapperAddress = "0xaD48C81ac9CdcD4fE3e25B8493b2798eA5104e6f";
const identityMapperAbi = () => {
    return `[{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressToDiscord","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressToTwitter","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"discordTag_","type":"string"}],"name":"setDiscordIdentity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"twitterTag_","type":"string"}],"name":"setTwitterIdentity","outputs":[],"stateMutability":"nonpayable","type":"function"}]`;
}

const providerID = new ethers.providers.Web3Provider(window.ethereum, "any");
const signerID = providerID.getSigner();

const identityMapper = new ethers.Contract(identityMapperAddress, identityMapperAbi(), signerID);

 const promptForDiscord = async() => {
    if (!($("#discord-popup").length)) {
        let userAddress = await signer.getAddress();
        let currentDiscord = await identityMapper.addressToDiscord(userAddress);
        let discordString = currentDiscord ? currentDiscord : "None";
        let fakeJSX = `<div id="discord-popup">
                        <div id="content">
                         <p>Enter Discord User ID to associate with purchases.</p>
                         <p>Current: ${discordString}</p>
                         <br>
                         <input id="discord-name" type="text" spellcheck="false" value="" placeholder="user#1234">
                         <br>
                         <button class="button" onclick="setDiscord()"">SET DISCORD</button>
                        </div>
                       </div>`;
        $("body").append(fakeJSX);
        let height = $(document).height();
        $("body").append(`<div id='block-screen-discord' style="height:${height}px" onclick="$('#discord-popup').remove();$('#block-screen-discord').remove()"></div>`);
    }
}

const setDiscord = async() => {
    try {
        let name = $("#discord-name").val();
        console.log(name)
        if (name == "") {
            await displayErrorMessage(`Error: No User ID provided!`);

        }
        else if (!(name.includes("#"))) {
            await displayErrorMessage(`Error: Must include "#" and numbers in ID!`);
        }
        else {
            await identityMapper.setDiscordIdentity(name).then( async(tx_) => {
                await waitForTransaction(tx_);
                $('#discord-popup').remove();
                $('#block-screen-discord').remove();
            });
        }
    }
    catch (error) {
        if ((error.message).includes("User denied transaction signature")) {
            console.log("Transaction rejected.");
        }
        else {
            await displayErrorMessage("An error occurred. See console and window alert for details...")
            window.alert(error);
            console.log(error);
        }
    }
}

var discordSet = false;
var discordFailures = 0;

const updateDiscord = async() => {
    try {
        if (!discordSet) {
            let userAddress = await getAddress();
            let currentDiscord = await identityMapper.addressToDiscord(userAddress);
            if (currentDiscord) {
                discordSet = true
                $("#discord-text").text("SET!");
                $("#discord").addClass("success");
                $("#discord").removeClass("failure");
                $("#discord-text-mobile").text("SET!");
                $("#discord-mobile").addClass("success");
                $("#discord-mobile").removeClass("failure"); 
            }
            else {
                $("#discord-text").text("NOT SET!");
                $("#discord").addClass("failure");
                $("#discord").removeClass("success"); 
                $("#discord-text-mobile").text("NOT SET!");    
                $("#discord-mobile").addClass("failure"); 
                $("#discord-mobile").removeClass("success"); 
            }
        }
    }
    catch (error) {
        discordFailures+=1;
        console.log("unable to reach discord directory")
        if (discordFailures >= 10) {
            discordSet = true;
        }
    }
}

var timeout = 100;

setInterval(async()=>{
    await updateDiscord();
    timeout = 5000;
}, timeout)