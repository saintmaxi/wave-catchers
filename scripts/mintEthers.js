/*********************************************************************************/
/********************************PRODUCTION CONFIG********************************/
/*********************************************************************************/

// const wavecatchersAddress = "";
// const wavecatchersAbi = () => {
//     return ``;
// };

// const etherscanBase = `https://etherscan.io/tx/`;
// const correctChain = 1;
// const MAX_MINT = 10;
// const MAX_MINT_WL = 10;
// const MAX_SUPPLY = 3334;
// const priceWei = "25000000000000000";
// const priceEth = .025
// const openseaLink = "";
// const looksrareLink = "";

/*********************************************************************************/
/********************************DEV CONFIG********************************/
/*********************************************************************************/

const wavecatchersAddress = "0x60f9391e12A18cdC84168Ba7452e257BC93b8CA3";
const wavecatchersAbi = () => {
    return `[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"collectionSize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextOwnerToExplicitlySet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]`;
};

const etherscanBase = `https://rinkeby.etherscan.io/tx/`;
const correctChain = 4;
const MAX_MINT = 10;
const MAX_MINT_WL = 10;
const MAX_SUPPLY = 3334;
const priceWei = "25000000000000000";
const priceEth = .025
const openseaLink = "";
const looksrareLink = "";

/*********************************END CONFIG************************************/

if (window.ethereum == undefined) {
    displayErrorMessage('Use a web3 enabled browser to mint!');
}

const provider = new ethers.providers.Web3Provider(window.ethereum,"any");
const signer = provider.getSigner();
const wavecatchers = new ethers.Contract(wavecatchersAddress, wavecatchersAbi(), signer);

const merkleProofSourceUrl = "https://api.nonfungiblecdn.com/cyberturtles/merkleproofs"; // change

var whitelistIsLive;
var publicIsLive;
var totalMinted;

const connect = async()=>{
    await provider.send("eth_requestAccounts", []);
    await revealMintPrompt();
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
    const _proof = await fetch(`${merkleProofSourceUrl}/${_senderAddress}`).then(res => res.text());
    const _proofArray = _proof ? JSON.parse(_proof) : [];
    return _proofArray;
};

const isWhitelistOnly = async() => {
    return false;
    let whitelistStart = await wavecatchers.whitelistSaleStartTime()
    let whitelistLive = Date.now() > whitelistStart ? true : false;
    whitelistIsLive = whitelistLive;
    return whitelistLive;
}

const isPublic = async() => {
    return true;
    let publicStart = await wavecatchers.publicSaleStartTime();
    let publicLive = Date.now() > publicStart ? true : false;
    publicIsLive = publicLive;
    return publicLive;
}

const checkMintingLive = async() => {
    const whitelistLive = await isWhitelistOnly();
    const publicLive = await isPublic();
    if (!whitelistLive && !publicLive) {
        $("#mint-tools").addClass("hidden");
        $("#mint-closed").removeClass("hidden");
    }
    else {
        if (publicLive && whitelistLive) {
            $("#whitelisted").html('');
        }
        $("#mint-tools").removeClass("hidden");
        $("#mint-closed").addClass("hidden");
    }
}

const checkWhitelistStatus = async() => {
    const whitelistLive = await isWhitelistOnly();

    if (whitelistLive) {
        const _merkleProof = await getMerkleProof();
        const addr = await getAddress();
        const _isWhitelisted = await wavecatchers.isWhitelisted(addr, _merkleProof).catch(err => console.log(err)); //change

        if (!publicIsLive) {
            $("#whitelisted").html(_isWhitelisted ? "Congrats, you made the whitelist!" : "Sorry, you are not whitelisted. Please wait for our public sale.");
        }
        return _isWhitelisted;
    }
};

const _publicMint = async(numberToMint) => {
    if (numberToMint > MAX_MINT) {
        await displayErrorMessage(`Max ${MAX_MINT} mints!`);
    }

    // const cost = ethers.BigNumber.from(priceWei).mul(numberToMint);
    // const gasLimit = await wavecatchers.estimateGas.mint(numberToMint, {value: cost})
    // const newGasLimit = parseInt((gasLimit * 1.2)).toString();

    // await wavecatchers.mint(numberToMint, { value: cost, gasLimit: newGasLimit}).then( async(tx_) => {
    //     await waitForTransaction(tx_);
    // });   
    await wavecatchers.mint(numberToMint).then( async(tx_) => {
        await waitForTransaction(tx_);
    });   
};

const _whitelistMint = async(numberToMint) => {
    const whitelisted = checkWhitelistStatus();
    if (!whitelisted){
        await displayErrorMessage("You are not whitelisted!");
    }
    else if (numberToMint > MAX_MINT_WL) {
        await displayErrorMessage(`Max ${MAX_MINT_WL} mints for WL!`);
    }
    else {
        const merkleProof = await getMerkleProof();
        const cost = ethers.BigNumber.from(priceWei).mul(numberToMint); 
        const gasLimit = await wavecatchers.estimateGas.whitelistMint(merkleProof, numberToMint, {value: cost});
        const newGasLimit = parseInt((gasLimit * 1.2)).toString();
        
        await wavecatchers.whitelistMint(merkleProof, numberToMint, {value: cost, gasLimit: newGasLimit}).then( async(tx_) => {
            await waitForTransaction(tx_);
        });
    }
};

const mint = async() => {
    const whitelistLive = await isWhitelistOnly();
    const publicLive = await isPublic();
    const numberToMint = Number($("#number-to-mint").text());
    // const minted = await wavecatchers.totalSupply();

    try {
        if (publicLive) {
            await _publicMint(numberToMint);
        }
        else if (whitelistLive) {
            await _whitelistMint(numberToMint);
        }
        else {
            await displayErrorMessage("Minting not yet live!")
        }
    }
    catch (error) { // edit error messages
        if ((error.message).includes("Can only mint max 3 in whitelist")) {
            await displayErrorMessage(`Error: Max ${MAX_MINT_WL} mints for WL!`)
        }
        else if ((error.message).includes("Can only mint max 6")) {
            await displayErrorMessage(`Error: Max ${MAX_MINT} mints per address!`)
        }
        else if ((error.message).includes("Did not send enough eth!")) {
            await displayErrorMessage(`Error: Insufficient ETH!`)
        }
        else if ((error.message).includes("Sale has not yet started!")) {
            await displayErrorMessage(`Error: Sale not yet started!`)
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
    totalMinted = minted;
    $("#num-minted").text(minted);
    if (minted == MAX_SUPPLY) {
        $("#sold-out").html(`SOLD OUT! <br><br>AVAILABLE ON <a href="${openseaLink}" target="_blank" class="w-inline-block" style="text-decoration:none;color:#03B4FC;">OPENSEA⬈</a> & <a href="${looksrareLink}" target="_blank" class="w-inline-block" style="text-decoration:none;color:green;">LOOKSRARE⬈</a>`);
        $("#mint-button").remove();
        // $("#mint-n-stake-button").remove();
        $("#quantity-controls").remove();
    }
}

const updateCurrentChain = async() => {
    if ((await getChainId()) !== correctChain) {
        displayErrorMessage("Error: Wrong Network!", false);
    }
    else {
        $("#error-popup").remove();
        $("#block-screen-error").remove();
    }
}

provider.on("network", async(newNetwork, oldNetwork) => {
        if (oldNetwork) {
            $("#refresh-notification").remove();
            await updateCurrentChain();
            await updateMintInfo();
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
    displayLoading();
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
    $("#loading-popup").remove();
    $("#block-screen-loading").remove();
    pendingTransactions.delete(tx);
    if (pendingTransactions.size == 0) {
        await updateMintInfo();
    }
}

setInterval(async()=>{
    await updateInfo();
    await checkMintingLive();
    await updateMintInfo();
}, 5000)

const updateInfo = async () => {
    let userAddress = await getAddress();
    $("#account").html(`${userAddress.substr(0,9)}..`);
    $("#mobile-account").text(`${userAddress.substr(0,9)}..`);
};

ethereum.on("accountsChanged", async(accounts_)=>{
    location.reload();
});

window.onload = async()=>{
    await updateInfo();
    // await checkMintingLive();
    await updateMintInfo();
    await updatePrice();
    await checkWhitelistStatus();
};

window.onunload = async()=>{
    cachePendingTransactions();
}