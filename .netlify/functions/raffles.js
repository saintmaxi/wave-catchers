const ethers = require('ethers');

const infuraKey = process.env.INFURA_KEY;
const provider = new ethers.providers.InfuraProvider("mainnet", infuraKey);
const cocoImgURL = "https://github.com/saintmaxi/wave-catchers/blob/main/images/coco.png?raw=true";

const marketAddress = "";
const marketAbi = () => { 
    return ``;
};

const market = new ethers.Contract(marketAddress, marketAbi(), provider);

var rafflesData = require("./raffle-data.json");

const getLatestRaffle = async() => {
    currentID = (await market.raffleCounter()) - 1;
    let raffleInfo = await market.getRaffle(currentID);
    latestEndTime = raffleInfo.endTime;
    let expired = (raffleInfo.endTime < (Date.now() / 1000));
    let raffleTitle;
    let rafflePrice;
    let raffleImg

    if (expired) {
        return {
            raffleLive: false
        }
    }
    else {
        rafflePrice = Number(formatEther(raffleInfo.price));
        raffleImg = rafflesData[String(currentID)].image;
        raffleTitle = rafflesData[String(currentID)].name;
        capped = raffleInfo.capped;
    
        return {
            raffleLive: true,
            rafflePrice: rafflePrice,
            raffleImg: raffleImg,
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
        let rafflePrice = Number(formatEther(raffleInfo.price));
        let userEntries = await getRaffleEntries(id);
        let expired = (raffleInfo.endTime < (Date.now() / 1000));

        // Data from JSON file
        let raffle = rafflesData[String(id)];
        let hasEntered = await market.hasPurchasedRaffle(currentID, await getAddress());

        if (expired) {
            numPast +=1;
            let button;
            if (hasEntered) {
                button = `<button disabled class="mint-prompt-button button purchased">ENTERED!</button>`;
            }
            else {
                button = `<button disabled class="mint-prompt-button button purchased">EXPIRED</button>`;
            }
            let fakeJSX = `<div class="partner-collection" id="raffle-${id}">
                            <img class="collection-img" src="${raffle["image"]}">
                            <div class="collection-info">
                                <h3>${raffle["name"]}</h3>
                                <h4>${rafflePrice} <img src="${cocoImgURL}" class="coco-icon"></h4>
                                <h4>Your entries: ${userEntries}</h4>
                            </div>
                            ${button}
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

