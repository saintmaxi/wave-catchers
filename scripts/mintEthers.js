// a saintmaxi joint
/*********************************************************************************/
/********************************PRODUCTION CONFIG********************************/
/*********************************************************************************/

const wavecatchersAddress = "0x1A331c89898C37300CccE1298c62aefD3dFC016c";
const wavecatchersAbi = () => {
    return `[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"bytes32[]","name":"merkleProof","type":"bytes32[]"}],"name":"OGMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"bytes32[]","name":"_merkleProof","type":"bytes32[]"}],"name":"canClaimOG","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"collectionSize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"flipSaleState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isRevealed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"merkleRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextOwnerToExplicitlySet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"reserve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"reveal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleIsActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_defaultURI","type":"string"}],"name":"setDefaultURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_merkleRoot","type":"bytes32"}],"name":"setMerkleRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"wlSupplyLeft","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]`;
};

const etherscanBase = `https://etherscan.io/tx/`;
const correctChain = 1;
const MAX_MINT = 10;
const MAX_MINT_WL = 1;
const MAX_SUPPLY = 3334;
const priceWei = "25000000000000000";
const priceEth = .025
const openseaLink = "https://opensea.io/collection/wavecatchersofficial";

/*********************************************************************************/
/********************************DEV CONFIG********************************/
/*********************************************************************************/

// const wavecatchersAddress = "0x153430eD9Eb09cEEF53e6Ba0Efc1725A830A56a5";
// const wavecatchersAbi = () => {
//     return `[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"bytes32[]","name":"merkleProof","type":"bytes32[]"}],"name":"OGMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"bytes32[]","name":"_merkleProof","type":"bytes32[]"}],"name":"canClaimOG","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"collectionSize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"flipSaleState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isRevealed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"merkleRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextOwnerToExplicitlySet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"ownerMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleIsActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_defaultURI","type":"string"}],"name":"setDefaultURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_merkleRoot","type":"bytes32"}],"name":"setMerkleRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"wlSupplyLeft","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]`;
// };

// const etherscanBase = `https://rinkeby.etherscan.io/tx/`;
// const correctChain = 4;
// const MAX_MINT = 10;
// const MAX_MINT_WL = 1;
// const MAX_SUPPLY = 3334;
// const priceWei = "25000000000000000";
// const priceEth = .025
// const openseaLink = "";

/*********************************END CONFIG************************************/

// if (window.ethereum == undefined) {
//     if (window.location.pathname == '/index.html' || window.location.pathname == '/') {
//         displayErrorMessage('Use a web3 enabled browser to mint!');
//     }
// }

const provider = new ethers.providers.Web3Provider(window.ethereum,"any");
const signer = provider.getSigner();
const wavecatchers = new ethers.Contract(wavecatchersAddress, wavecatchersAbi(), signer);

var whitelistIsLive;
var publicIsLive;
var totalMinted;

const connect = async()=>{
    await provider.send("eth_requestAccounts", []);
};

const getAddress = async()=>{
    return await signer.getAddress()
};

const formatEther = (balance_)=>{
    return ethers.utils.formatEther(balance_)
};

const parseEther = (eth_)=>{
    return ethers.utils.parseEther(eth_)
};

const getChainId = async()=>{
    return await signer.getChainId()
};

function decrementClaim() {
    let currentClaim = Number($("#number-to-mint").text());
    if (currentClaim > 1) {
        let newClaim = currentClaim - 1;
        $("#number-to-mint").text(newClaim);
    }
}

function updatePrice() {
    let currentClaim = Number($("#number-to-mint").text());
    let totalMintedAfter = totalMinted += 1;
    $("#current-cost").html(`${(priceEth * currentClaim).toFixed(3)} <span style="font-family: Arial, Helvetica, sans-serif;">Ξ</span>`)
}

function incrementClaim() {
    let currentClaim = Number($("#number-to-mint").text());
    let max;
    if (whitelistIsLive && !publicIsLive) {
        max = MAX_MINT_WL;
    }
    else {
        max = MAX_MINT;
    }
    if (currentClaim != max) {
        let newClaim = currentClaim + 1;
        $("#number-to-mint").text(newClaim);
    }
}

const setMaxMint = async() => {
    if (whitelistIsLive && !publicIsLive) {
        $("#number-to-mint").text(MAX_MINT_WL);
        $("#current-cost").text((priceEth * MAX_MINT_WL).toFixed(3))
    }
    else {
        $("#number-to-mint").text(MAX_MINT);
        let totalMintedAfter = totalMinted += 1;
        $("#current-cost").html(`${(priceEth * MAX_MINT).toFixed(3)} <span style="font-family: Arial, Helvetica, sans-serif;">Ξ</span>`)
    }
}

const getMerkleProof = async() => {
    const _senderAddress = await getAddress();
    const _proof = await fetch(`https://www.wavecatchers.io/.netlify/functions/merkle?addr=${_senderAddress}`).then(res => res.text());
    try {
        const _proofArray = _proof ? JSON.parse(_proof) : [];
        return _proofArray
    }
    catch (error) {
        console.log(error);
        return [];
    }
};

const checkMintingLive = async() => {
    const live = await wavecatchers.saleIsActive();
    if (!live) {
        $("#mint-button").addClass("hidden");
        $("#quantity-controls").addClass("hidden");
        // $("#claim-button").addClass("hidden");
        $("#mint-closed").removeClass("hidden");
    }
    else {
        $("#mint-button").removeClass("hidden");
        $("#quantity-controls").removeClass("hidden");
        $("#mint-closed").addClass("hidden");
    }
    return live;
}

const checkWhitelistStatus = async() => {
    const _merkleProof = await getMerkleProof();
    const addr = await getAddress();
    const _isWhitelisted = await wavecatchers.canClaimOG(addr, _merkleProof).catch(err => console.log(err));
    if (await checkMintingLive()) {
        if (_isWhitelisted) {
            $("#whitelisted").html("Congrats, <span class='hide-on-mobile'>you are an </span>OG!<br>Claim 1 free Wave Catcher with the 'CLAIM OG' button.");
            $("#claim-button").removeClass("hidden");
        }
        else {
            $("#whitelisted").html(`Sorry, you are not OG or have already claimed! Purchase on secondary on <a href="${openseaLink}" target="_blank" class="w-inline-block" style="text-decoration:none;color:#03B4FC;">OPENSEA⬈</a>.`);
            $("#claim-button").addClass("hidden");
        }
    }
    else {
        // $("#whitelisted").html("");
        $("#claim-button").addClass("hidden");
    }
    return _isWhitelisted;
};

const publicMint = async() => {
    try {
        const numberToMint = Number($("#number-to-mint").text());
        if (numberToMint > MAX_MINT) {
            await displayErrorMessage(`Max ${MAX_MINT} mints!`);
        }

        const cost = ethers.BigNumber.from(priceWei).mul(numberToMint);
        const gasLimit = await wavecatchers.estimateGas.mint(numberToMint, {value: cost})
        const newGasLimit = parseInt((gasLimit * 1.2)).toString();

        await wavecatchers.mint(numberToMint, { value: cost, gasLimit: newGasLimit}).then( async(tx_) => {
            await waitForTransaction(tx_);
        });   
    }
    catch (error) { // edit error messages
        if ((error.message).includes("Sale is not active")) {
            await displayErrorMessage(`Error: Sale is not active!`)
        }
        else if ((error.message).includes("Exceeds max supply")) {
            await displayErrorMessage(`Error: Mint would exceed max supply!`)
        }
        else if ((error.message).includes("Incorrect ETH value sent")) {
            await displayErrorMessage(`Error: Incorrect ETH value sent!`)
        }
        else if ((error.message).includes("User denied transaction signature")) {
            console.log("Transaction rejected.");
        }
        else {
            await displayErrorMessage("An error occurred. See console and window alert for details...")
            window.alert(error);
            console.log(error);
        }
    }
};

const ogMint = async() => {
    try {
        const whitelisted = checkWhitelistStatus();
        if (!whitelisted){
            await displayErrorMessage("You are not OG!");
        }
        else {
            const merkleProof = await getMerkleProof();
            const gasLimit = await wavecatchers.estimateGas.OGMint(merkleProof);
            const newGasLimit = parseInt((gasLimit * 1.2)).toString();
            
            await wavecatchers.OGMint(merkleProof, {gasLimit: newGasLimit}).then( async(tx_) => {
                await waitForTransaction(tx_);
            });
        }
    }
    catch (error) { // edit error messages
        if ((error.message).includes("Sale is not active")) {
            await displayErrorMessage(`Error: Sale is not active!`)
        }
        else if ((error.message).includes("No supply left for OG")) {
            await displayErrorMessage(`Error: No supply left for OG!`)
        }
        else if ((error.message).includes("Already claimed")) {
            await displayErrorMessage("Error: Already claimed OG!");
        }
        else if ((error.message).includes("Invalid merkle proof")) {
            await displayErrorMessage("Error: Invalid merkle proof!");
        }
        else if ((error.message).includes("User denied transaction signature")) {
            console.log("Transaction rejected.");
        }
        else {
            await displayErrorMessage("An error occurred. See console and window alert for details...")
            window.alert(error);
            console.log(error);
        }
    }
};

const updateMintInfo = async() => {
    let minted = Number(await wavecatchers.totalSupply());
    let wlLeft = Number(await wavecatchers.wlSupplyLeft());
    totalMinted = minted;
    $("#num-minted").text(minted);
    if (minted == MAX_SUPPLY) {
        $("#sold-out").html(`SOLD OUT! <br><br>AVAILABLE ON <a href="${openseaLink}" target="_blank" class="w-inline-block" style="text-decoration:none;color:#03B4FC;">OPENSEA⬈</a>`);
        $("#whitelisted").remove();
        $("#mint-button").remove();
        $("#claim-button").remove();
        $("#quantity-controls").remove();
    }
    else if (minted == (MAX_SUPPLY - wlLeft)) {
        $("#mint-button").remove();
        $("#quantity-controls").remove();
    }
}

provider.on("network", async(newNetwork, oldNetwork) => {
    if (oldNetwork) {
        location.reload();
    }
});

// Processing tx returns
const waitForTransaction = async(tx_) => {
    startLoading(tx_);
    provider.once(tx_.hash, async (transaction_) => {
        await endLoading(tx_, transaction_.status);
    });
};

// Resuming UI display, refreshing market for pending txs across pages
var pendingTransactions = localStorage.getItem("WaveCatchersPendingTxs");

if (!pendingTransactions) {
    pendingTransactions = new Set();
}
else {
    pendingTransactions = new Set(Array.from(JSON.parse(pendingTransactions)));
    pendingTxArray = Array.from(pendingTransactions);
    pendingTransactions = new Set();

    for (let i =0; i < pendingTxArray.length; i++) {
        waitForTransaction(pendingTxArray[i]);
    }
    localStorage.removeItem("WaveCatchersPendingTxs");
}

function cachePendingTransactions() {
    localStorage.setItem("WaveCatchersPendingTxs", JSON.stringify(Array.from(pendingTransactions)));
}

function startLoading(tx) {
    let txHash = tx.hash;
    const etherscanLink = `${etherscanBase}${txHash}`;
    const loadingDiv = `<a href="${etherscanLink}" class="etherscan-link" id="etherscan-link-${txHash}" target="_blank" rel="noopener noreferrer"><div class="loading-div" id="loading-div-${txHash}">PROCESSING<span class="one">.</span><span class="two">.</span><span class="three">.</span>​<br>CLICK FOR ETHERSCAN</div></a><br>`;
    $("#pending-transactions").append(loadingDiv);
    pendingTransactions.add(tx);
}

async function endLoading(tx, txStatus) {
    let txHash = tx.hash;
    $(`#loading-div-${txHash}`).html("");
    let status = txStatus == 1 ? "SUCCESS" : "ERROR";
    $(`#loading-div-${txHash}`).addClass("blinking");
    if (txStatus == 1) {
        $(`#loading-div-${txHash}`).addClass("success");
    }
    else if (txStatus == 0) {
        $(`#loading-div-${txHash}`).addClass("failure");
    }
    $(`#loading-div-${txHash}`).append(`TRANSACTION ${status}.<br>VIEW ON ETHERSCAN.`);
    await sleep(7000);
    $(`#etherscan-link-${txHash}`).remove();
    pendingTransactions.delete(tx);
    if (pendingTransactions.size == 0) {
        await updateMintInfo();
    }
}

setInterval(async()=>{
    await updateInfo();
    await updateMintInfo();
    await checkMintingLive();
    await checkWhitelistStatus();
}, 5000)

var chainLogoSet = false;

const setChainLogo = async() => {
    let chainLogo = "";
    let chain = await getChainId();
    if (chain == 1 || chain == 4) {
        chainLogo = "<img src='https://github.com/saintmaxi/wave-catchers/blob/main/images/eth.png?raw=true' class='coco-icon'>";
    }
    else if (chain == 42161) {
        chainLogo = "<img src='https://github.com/saintmaxi/wave-catchers/blob/main/images/arbitrum.png?raw=true' class='coco-icon'>";
    }
    chainLogoSet = true;
    $("#account-chain-logo").html(chainLogo);
    $("#mobile-account-chain-logo").html(chainLogo);
}

const updateInfo = async () => {
    let userAddress = await getAddress();
    $("#account-text").html(`${userAddress.substr(0,7)}..`);
    $("#mobile-account-text").html(`${userAddress.substr(0,12)}..`);
    // if (!chainLogoSet) {
    //     await setChainLogo();
    // }
};

ethereum.on("accountsChanged", async(accounts_)=>{
    location.reload();
});

window.onload = async()=>{
    await updateInfo();
    await checkMintingLive();
    await updateMintInfo();
    await updatePrice();
    await checkWhitelistStatus();
};

window.onunload = async()=>{
    cachePendingTransactions();
}