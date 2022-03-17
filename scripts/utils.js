// a saintmaxi joint

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
    const jsonData = listings ? JSON.parse(listings) : [];
    if (jsonData.currentRaffle.raffleLive == false) {
        $("#raffle-title").html("No raffles live!");
    }
    else {
        $("#raffle-title").html(jsonData.currentRaffle.raffleTitle);
        $("#current-raffle-img").attr("src", jsonData.currentRaffle.raffleImg);
        $("#base-raffle-price").html(jsonData.currentRaffle.rafflePrice);
        if (jsonData.currentRaffle.capped) {
            $("#total-price").addClass("hidden");
            $("#max-msg").html("Max 1 entry!");
            $("#entry-num").addClass("hidden");
        }
        else {
            $("#total-price").removeClass("hidden");
            $("#max-msg").html(`Unlimited entries!<br class="hide-on-desktop"><br class="hide-on-desktop"> Yours: <span id="your-entries">???</span>`);
            $("#entry-num").removeClass("hidden");
        }
    }
    $("#past-raffles").empty();
    $("#past-raffles").append(jsonData.pastRaffles.pastJSX);
    $("#num-past").text(` (${jsonData.pastRaffles.numPast})`);
    $("#enter-button").addClass("hidden");
    $("#enter-with-name-button").addClass("hidden");
    $("#connect-button").removeClass("hidden");
}