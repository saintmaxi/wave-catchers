const ethers = require('ethers');

const infuraKey = process.env.INFURA_KEY;
const provider = new ethers.providers.InfuraProvider("mainnet", infuraKey);
const cocoImgURL = "https://github.com/saintmaxi/wave-catchers/blob/main/images/coco.png?raw=true";

const marketAddress = "0x85057EF13bFd8c1faF70768Bfe870c0c2e8E61cC";
const marketAbi = () => { 
    return `[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_id","type":"uint256"},{"indexed":true,"internalType":"address","name":"_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"},{"indexed":false,"internalType":"string","name":"_name","type":"string"}],"name":"EnterRaffle","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_id","type":"uint256"},{"indexed":true,"internalType":"address","name":"_address","type":"address"},{"indexed":false,"internalType":"string","name":"_name","type":"string"}],"name":"PurchaseWL","type":"event"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"bool","name":"_capped","type":"bool"}],"name":"addRaffle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"addWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cocoAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"bool","name":"_capped","type":"bool"},{"internalType":"uint256","name":"_timestamp","type":"uint256"}],"name":"editRaffle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"bool","name":"_capped","type":"bool"}],"name":"editRaffleAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_timestamp","type":"uint256"}],"name":"editRaffleEnd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"editRafflePrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"editWLAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"editWLPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_timestamp","type":"uint256"}],"name":"editWLTimestamp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"uint256","name":"_timestamp","type":"uint256"}],"name":"editWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"string","name":"_name","type":"string"}],"name":"enterRaffle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getRaffle","outputs":[{"components":[{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"bool","name":"capped","type":"bool"}],"internalType":"struct CocoMarketplaceV2.Raffle","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getWhitelist","outputs":[{"components":[{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"internalType":"struct CocoMarketplaceV2.Whitelist","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"address","name":"_address","type":"address"}],"name":"hasPurchasedRaffle","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"address","name":"_address","type":"address"}],"name":"hasPurchasedWL","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"isCappedRaffle","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"string","name":"_name","type":"string"}],"name":"purchase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"raffleCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"raffleTimer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_cocoAddress","type":"address"}],"name":"setCocoAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_time","type":"uint256"}],"name":"setRaffleTimer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_time","type":"uint256"}],"name":"setWhitelistTimer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"skipRaffleIndex","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"whitelistCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"whitelistTimer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]`;
};

const market = new ethers.Contract(marketAddress, marketAbi(), provider);

var rafflesData = require("./raffle-data.json");

const getTotalEntries = async(id) => {
    const eventFilter = market.filters.EnterRaffle(id);
    const logs = await market.queryFilter(eventFilter);

    let entries = 0;
    for (i = 0; i < logs.length; i++) {
        let amount = Number(logs[i].args._amount);
        entries += amount;
    }
    return entries;
}

const getLatestRaffle = async() => {
    currentID = (await market.raffleCounter()) - 1;
    let raffleInfo = await market.getRaffle(currentID);
    latestEndTime = raffleInfo.endTime;
    let expired = (raffleInfo.endTime < (Date.now() / 1000));
    let raffleTitle;
    let rafflePrice;
    let raffleImg
    let totalEntries = await getTotalEntries(currentID);

    if (expired) {
        return {
            raffleLive: false
        }
    }
    else {
        rafflePrice = Number(ethers.utils.formatEther(raffleInfo.price));
        raffleImg = rafflesData[String(currentID)].image;
        raffleTitle = rafflesData[String(currentID)].name;
        capped = raffleInfo.capped;
    
        return {
            raffleLive: true,
            raffleTitle: raffleTitle,
            rafflePrice: rafflePrice,
            raffleImg: raffleImg,
            totalEntries: totalEntries,
            capped: capped
        }
    }
}

const getPastRaffles = async() => {
    let pastJSX = "";
    let numPast = 0;
    let raffleIDs = Object.keys(rafflesData);
    for (let i = 0; i < raffleIDs.length; i++) {
        let id = Number(raffleIDs[i]);

        // Raffle data from contract
        let raffleInfo = await market.getRaffle(id);
        let rafflePrice = Number(ethers.utils.formatEther(raffleInfo.price));
        let expired = (raffleInfo.endTime < (Date.now() / 1000));
        let totalEntries = await getTotalEntries(currentID);

        // Data from JSON file
        let raffle = rafflesData[String(id)];

        if (expired) {
            numPast +=1;
            let fakeJSX = `<div class="partner-collection" id="raffle-${id}">
                            <img class="collection-img" src="${raffle["image"]}">
                            <div class="collection-info">
                                <h3>${raffle["name"]}</h3>
                                <h4>${rafflePrice} <img src="${cocoImgURL}" class="coco-icon"></h4>
                                <h4>Total Entries: ${totalEntries}</h4>
                            </div>
                            <button class="mint-prompt-button button" onclick="connect()">CONNECT</button>
                            </div>`
            pastJSX = fakeJSX + pastJSX;
        }
    }
    return {
        pastJSX: pastJSX,
        numPast: numPast
    }
}

const getRaffles = async() => {
    let currentRaffle = await getLatestRaffle();
    let pastRaffles = await getPastRaffles();

    return { 
            currentRaffle: currentRaffle,
            pastRaffles: pastRaffles
           }
}

exports.handler = async function(event, context) {
    try {
        let { get } = event.queryStringParameters || {};
         if (!get) {
            return { statusCode: 400, body: "Missing query parameters" };
         }

         let raffles = await getRaffles();

         return {
            statusCode: 200,
            headers: { "content-type": "application/json" },
            body: JSON.stringify(raffles)
          }
     
    } 
    catch (err) {
        console.log("invocation error:", err); // output to netlify function log
        return {
            statusCode: 500,
            body: err.message
         };
    }
  };

