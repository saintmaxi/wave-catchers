// a saintmaxi joint
/*********************************************************************************/
/********************************PRODUCTION CONFIG********************************/
/*********************************************************************************/

const wavecatchersAddress = "0x1A331c89898C37300CccE1298c62aefD3dFC016c";
const wavecatchersAbi = () => {
    return `[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"bytes32[]","name":"merkleProof","type":"bytes32[]"}],"name":"OGMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"bytes32[]","name":"_merkleProof","type":"bytes32[]"}],"name":"canClaimOG","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"collectionSize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"flipSaleState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isRevealed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"merkleRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextOwnerToExplicitlySet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"reserve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"reveal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleIsActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_defaultURI","type":"string"}],"name":"setDefaultURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_merkleRoot","type":"bytes32"}],"name":"setMerkleRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"wlSupplyLeft","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]`;
};

const marketAddress = "0x85057EF13bFd8c1faF70768Bfe870c0c2e8E61cC";
const marketAbi = () => { 
    return `[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_id","type":"uint256"},{"indexed":true,"internalType":"address","name":"_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"},{"indexed":false,"internalType":"string","name":"_name","type":"string"}],"name":"EnterRaffle","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_id","type":"uint256"},{"indexed":true,"internalType":"address","name":"_address","type":"address"},{"indexed":false,"internalType":"string","name":"_name","type":"string"}],"name":"PurchaseWL","type":"event"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"bool","name":"_capped","type":"bool"}],"name":"addRaffle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"addWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cocoAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"bool","name":"_capped","type":"bool"},{"internalType":"uint256","name":"_timestamp","type":"uint256"}],"name":"editRaffle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"bool","name":"_capped","type":"bool"}],"name":"editRaffleAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_timestamp","type":"uint256"}],"name":"editRaffleEnd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"editRafflePrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"editWLAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"editWLPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_timestamp","type":"uint256"}],"name":"editWLTimestamp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"uint256","name":"_timestamp","type":"uint256"}],"name":"editWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"string","name":"_name","type":"string"}],"name":"enterRaffle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getRaffle","outputs":[{"components":[{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"bool","name":"capped","type":"bool"}],"internalType":"struct CocoMarketplaceV2.Raffle","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getWhitelist","outputs":[{"components":[{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"internalType":"struct CocoMarketplaceV2.Whitelist","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"address","name":"_address","type":"address"}],"name":"hasPurchasedRaffle","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"address","name":"_address","type":"address"}],"name":"hasPurchasedWL","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"isCappedRaffle","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"string","name":"_name","type":"string"}],"name":"purchase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"raffleCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"raffleTimer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_cocoAddress","type":"address"}],"name":"setCocoAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_time","type":"uint256"}],"name":"setRaffleTimer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_time","type":"uint256"}],"name":"setWhitelistTimer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"skipRaffleIndex","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"whitelistCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"whitelistTimer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]`;
};

const cocoAddress = "0x133B7c4A6B3FDb1392411d8AADd5b8B006ad69a4";
const cocoAbi = () => { 
        return `[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DEFAULT_START_TIMESTAMP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"EMISSION_RATE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16[]","name":"_tokenIds","type":"uint16[]"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getRewardsForId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setWaveCatchersAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"waveCatchers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]`;
};

const etherscanBase = `https://etherscan.io/tx/`;
const correctChain = 1;
const cocoImgURL = "https://github.com/saintmaxi/wave-catchers/blob/main/images/coco.png?raw=true";
const data_file = "./data/raffle-data.json";

/*********************************************************************************/
/********************************DEV CONFIG********************************/
/*********************************************************************************/

// const wavecatchersAddress = "0x153430eD9Eb09cEEF53e6Ba0Efc1725A830A56a5";
// const wavecatchersAbi = () => {
//     return `[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"bytes32[]","name":"merkleProof","type":"bytes32[]"}],"name":"OGMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"bytes32[]","name":"_merkleProof","type":"bytes32[]"}],"name":"canClaimOG","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"collectionSize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"flipSaleState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isRevealed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"merkleRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextOwnerToExplicitlySet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"ownerMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleIsActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_defaultURI","type":"string"}],"name":"setDefaultURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_merkleRoot","type":"bytes32"}],"name":"setMerkleRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"wlSupplyLeft","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]`;
// };

// const marketAddress = "0x9d8774f1e9Fc7333d8dcccb4916D4B919b07bB30";
// const marketAbi = () => { 
//     return `[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_id","type":"uint256"},{"indexed":true,"internalType":"address","name":"_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"},{"indexed":false,"internalType":"string","name":"_name","type":"string"}],"name":"EnterRaffle","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_id","type":"uint256"},{"indexed":true,"internalType":"address","name":"_address","type":"address"},{"indexed":false,"internalType":"string","name":"_name","type":"string"}],"name":"PurchaseWL","type":"event"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"bool","name":"_capped","type":"bool"}],"name":"addRaffle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"addWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cocoAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"bool","name":"_capped","type":"bool"},{"internalType":"uint256","name":"_timestamp","type":"uint256"}],"name":"editRaffle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"bool","name":"_capped","type":"bool"}],"name":"editRaffleAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_timestamp","type":"uint256"}],"name":"editRaffleEnd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"editRafflePrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"editWLAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"editWLPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_timestamp","type":"uint256"}],"name":"editWLTimestamp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"uint256","name":"_timestamp","type":"uint256"}],"name":"editWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"string","name":"_name","type":"string"}],"name":"enterRaffle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getRaffle","outputs":[{"components":[{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"bool","name":"capped","type":"bool"}],"internalType":"struct CocoMarketplaceV2.Raffle","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getWhitelist","outputs":[{"components":[{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"internalType":"struct CocoMarketplaceV2.Whitelist","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"address","name":"_address","type":"address"}],"name":"hasPurchasedRaffle","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"address","name":"_address","type":"address"}],"name":"hasPurchasedWL","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"isCappedRaffle","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"string","name":"_name","type":"string"}],"name":"purchase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"raffleCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"raffleTimer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_cocoAddress","type":"address"}],"name":"setCocoAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_time","type":"uint256"}],"name":"setRaffleTimer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_time","type":"uint256"}],"name":"setWhitelistTimer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"skipRaffleIndex","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"whitelistCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"whitelistTimer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]`;
// };

// const cocoAddress = "0x562DEa9BE18FbfABfFA28Ac7Ea2Be511C2A2ED9B";
// const cocoAbi = () => { 
//     return `[ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "DEFAULT_START_TIMESTAMP", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "EMISSION_RATE", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" } ], "name": "allowance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "approve", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "burnFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint16[]", "name": "_tokenIds", "type": "uint16[]" } ], "name": "claim", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "claimFree", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" } ], "name": "decreaseAllowance", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_id", "type": "uint256" } ], "name": "getRewardsForId", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" } ], "name": "increaseAllowance", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_address", "type": "address" } ], "name": "setWaveCatchersAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "transfer", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "waveCatchers", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" } ]`;
// };

// const etherscanBase = `https://rinkeby.etherscan.io/tx/`;
// const correctChain = 4;
// const cocoImgURL = "https://github.com/saintmaxi/wave-catchers/blob/main/images/coco.png?raw=true";
// const data_file = "./data/test-raffles.json";

/*********************************END CONFIG************************************/

if (window.ethereum == undefined) {
    displayErrorMessage('Use a web3 enabled browser and connect to enter raffles!');
}

// - - - - - - - - - SETUP + GENERAL WEB3 FUNCTIONS - - - - - - - - -

const provider = new ethers.providers.Web3Provider(window.ethereum,"any");
const signer = provider.getSigner();
const wavecatchers = new ethers.Contract(wavecatchersAddress, wavecatchersAbi(), signer);
const market = new ethers.Contract(marketAddress, marketAbi(), signer);
const coco = new ethers.Contract(cocoAddress, cocoAbi(), signer);

const connect = async()=>{
    await provider.send("eth_requestAccounts", []);
};

const getAddress = async() => { 
    try { 
        return await signer.getAddress(); 
    } 
    catch { 
        return false; 
    }
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

// General Variables
const maxInt = "115792089237316195423570985008687907853269984665640564039457584007913129639934";

// - - - - - - - - - APPROVAL FUNCTIONS - - - - - - - - -

const approveCocoToMarket = async() => {
    await coco.approve(marketAddress, maxInt).then (async(tx_) => {
        await waitForTransaction(tx_);
        $("#approval-button").html(`Approving<span class="one">.</span><span class="two">.</span><span class="three">.</span>`)
    });
}

const checkCocoApproval = async() => {
    const userAddress = await getAddress();
    let approved = (Number(await coco.allowance(userAddress, marketAddress)) >= maxInt) ? true : false;
    if (approved) {
        $("#approval-container").remove();
    }
    else {
        $("#approval-container").removeClass("hidden");
    }
};

// - - - - - - - - - RAFFLE FUNCTIONS - - - - - - - - -

var rafflePrice;
var capped;
var currentID;
var liveListing;
var latestEndTime;

const getLatestRaffle = async() => {
    let raffleCount = await market.raffleCounter();
    if (raffleCount == 0) {
        liveListing = false;
        $("#raffle-title").html("No raffles live!");
    }
    else {
        currentID = raffleCount - 1;
        let raffleInfo = await market.getRaffle(currentID);
        latestEndTime = raffleInfo.endTime;
        let expired = (raffleInfo.endTime < (Date.now() / 1000));
    
        if (expired) {
            liveListing = false;
            $("#raffle-title").html("No raffles live!");
        }
        else {
            liveListing = true;
            $("#time-left-div").removeClass("hidden");
            rafflePrice = Number(formatEther(raffleInfo.price));
            let raffleImg = rafflesData[String(currentID)].image;
            let raffleTitle = rafflesData[String(currentID)].name;
            let discordRequired = (rafflesData[String(currentID)]["discord-required"] == "true");
            let hasEntered = await market.hasPurchasedRaffle(currentID, await getAddress());
            $("#raffle-title").html(raffleTitle);
            $("#current-raffle-img").attr("src", raffleImg);
        
            capped = raffleInfo.capped;
        
            $("#base-raffle-price").html(rafflePrice);
            if (capped) {
                $("#total-price").addClass("hidden");
                $("#max-msg").html("Max 1 entry!");
                let userEntries = await getRaffleEntries(currentID);
                let totalEntries = await getTotalEntries(currentID);
                $("#your-entries").html(`Your Entries: <span id="your-entries-val">${userEntries}</span>`);
                $("#total-entries").html(`Total Entries: <span id="total-entries-val">${totalEntries}</span>`);
                $("#entry-num").addClass("hidden");
            }
            else {
                $("#total-price").removeClass("hidden");
                let userEntries = await getRaffleEntries(currentID);
                let totalEntries = await getTotalEntries(currentID);
                $("#max-msg").html(`Unlimited entries!`);
                $("#your-entries").html(`Your Entries: <span id="your-entries-val">${userEntries}</span>`);
                $("#total-entries").html(`Total Entries: <span id="total-entries-val">${totalEntries}</span>`);
                $("#entry-num").removeClass("hidden");
            }
        
            if (hasEntered) {
                $("#enter-button").remove();
                $("#enter-with-name-button").remove();
                $("#entered-button").removeClass("hidden");
            }
            else {
                $("#entered-button").addClass("hidden");   
            }
    
            if (discordRequired) {
                $("#enter-button").addClass("hidden");
                $("#enter-with-name-button").removeClass("hidden");
            }
            else {
                $("#enter-button").removeClass("hidden");
                $("#enter-with-name-button").addClass("hidden");
            }
        }
    }
}

const getRaffleEntries = async(id) => {
    let userAddress = await getAddress();
    const eventFilter = market.filters.EnterRaffle(id);
    const logs = await market.queryFilter(eventFilter);

    let entries = 0;
    for (i = 0; i < logs.length; i++) {
        let address = logs[i].args._address;
        let amount = Number(logs[i].args._amount);
        if (userAddress == address) {
            entries += amount;
        }
    }
    return entries;
}

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

const updateEntries = async() => {
    let userEntries = await getRaffleEntries(currentID);
    let totalEntries = await getTotalEntries(currentID);
    $("#your-entries-val").html(userEntries);
    $("#total-entries-val").html(totalEntries);
}

const loadPastRaffles = async() => {
    $("#past-raffles").empty();
    let userAddress = await getAddress();
    let pastJSX = "";
    let numPast = 0;
    let raffleIDs = Object.keys(rafflesData);
    for (let i = 0; i < raffleIDs.length; i++) {
        let id = Number(raffleIDs[i]);

        // Raffle data from contract
        let raffleInfo = await market.getRaffle(id);
        let rafflePrice = Number(formatEther(raffleInfo.price));
        let userEntries = await getRaffleEntries(id);
        let totalEntries = await getTotalEntries(id);
        let expired = (raffleInfo.endTime < (Date.now() / 1000));

        // Data from JSON file
        let raffle = rafflesData[String(id)];
        let hasEntered = await market.hasPurchasedRaffle(currentID, userAddress);

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
                                <h4>Your Entries: ${userEntries}</h4>
                                <h4>Total Entries: ${totalEntries}</h4>
                            </div>
                            ${button}
                            </div>`
            pastJSX = fakeJSX + pastJSX;
        }
    }
    $("#past-raffles").empty();
    $("#past-raffles").append(pastJSX);
    $("#num-past").text(` (${numPast})`);
}

const promptForDiscord = async(id) => {
    if (!($("#discord-popup").length)) {
        let fakeJSX = `<div id="discord-popup">
                        <div id="content">
                         <p>Enter Discord User ID to associate with entry.</p>
                         <br>
                         <input id="discord-name" type="text" spellcheck="false" value="" placeholder="user#1234">
                         <button class="button" onclick="enterRaffleWithName(${id})"">ENTER RAFFLE</button>
                        </div>
                       </div>`;
        $("body").append(fakeJSX);
        let height = $(document).height();
        $("body").append(`<div id='block-screen-discord' style="height:${height}px" onclick="$('#discord-popup').remove();$('#block-screen-discord').remove()"></div>`);
    }
}

const enterRaffle = async() => {
    try {
        if (capped) {
            await market.enterRaffle(currentID, 1, "").then( async(tx_) => {
                await waitForTransaction(tx_);
            });
        }
        else {
            let amount = Number($("#entry-num").val());
            if (amount == '') {
                await displayErrorMessage("Enter an amount of entries!");
            }
            else {
                await market.enterRaffle(currentID, amount, "").then( async(tx_) => {
                    await waitForTransaction(tx_);
                });
            }
        }
    }
    catch (error) {
        if ((error.message).includes("Already entered")) {
            await displayErrorMessage(`Error: You already entered!`);
        }
        else if ((error.message).includes("Raffle ended")) {
            await displayErrorMessage(`Error: Raffle ended!`);
        }
        else if ((error.message).includes("transfer amount exceeds balance")) {
            await displayErrorMessage(`Error: Insufficent $COCO balance!`);
        }
        else if ((error.message).includes("burn amount exceeds balance")) {
            await displayErrorMessage(`Error: Insufficent $COCO balance!`);
        }
        else if ((error.message).includes("burn amount exceeds allowance")) {
            await displayErrorMessage(`Error: Market v2 not approved to spend $COCO!`);
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
}


const enterRaffleWithName = async() => {
    try {
        let name = $("#discord-name").val();
        if (name == "") {
            await displayErrorMessage(`Error: No User ID provided!`);

        }
        else if (!(name.includes("#"))) {
            await displayErrorMessage(`Error: Must include "#" and numbers in ID!`);
        }
        else {
            if (capped) {
                await market.enterRaffle(currentID, 1, name).then( async(tx_) => {
                    await waitForTransaction(tx_);
                    $('#discord-popup').remove();
                    $('#block-screen-discord').remove()
                });
            }
            else {
                let amount = Number($("#entry-num").val());
                await market.enterRaffle(currentID, amount, name).then( async(tx_) => {
                    await waitForTransaction(tx_);
                    $('#discord-popup').remove();
                    $('#block-screen-discord').remove()
                });
            }
        }
    }
    catch (error) {
        if ((error.message).includes("Already entered")) {
            await displayErrorMessage(`Error: You already entered!`);
        }
        else if ((error.message).includes("Raffle ended")) {
            await displayErrorMessage(`Error: Raffle ended!`);
        }
        else if ((error.message).includes("transfer amount exceeds balance")) {
            await displayErrorMessage(`Error: Insufficent $COCO balance!`);
        }
        else if ((error.message).includes("burn amount exceeds balance")) {
            await displayErrorMessage(`Error: Insufficent $COCO balance!`);
        }
        else if ((error.message).includes("burn amount exceeds allowance")) {
            await displayErrorMessage(`Error: Market v2 not approved to spend $COCO!`);
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
}

const acceptedChars = new Set("0123456789");

$("#entry-num").on("change keyup paste", function(){
    try {
        let input = $(this).val();
        if (input == '') {
            $("#raffle-price").html("-");
        }
        else {
            let entries = Number(input);
            if (entries > 0) {
                $("#raffle-price").html(entries * rafflePrice);
            }
            else {
                $("#raffle-price").html("-");
            }
        }
    }
    catch (error) {
        console.log(error);
    }
});

setInterval(async()=>{
    if (liveListing) {
        var now = Date.now() / 1000;
        var distance = latestEndTime - now;

        var hours = Math.floor(distance / (60 * 60));
        var minutes = Math.floor((distance % (60 * 60)) / (60));
        var seconds = Math.floor((distance % (60)));

        if (hours < 10) {
            hours = `0${hours}`;
        }
        if (minutes < 10) {
            minutes = `0${minutes}`;
        }
        if (seconds < 10) {
            seconds = `0${seconds}`;
        }
            
        if (distance <= 0) {
            let blockTime = (await provider.getBlock((await provider.getBlockNumber()))).timestamp;
            if (blockTime > latestEndTime) {
                $(`#time-left`).html("EXPIRED");
            }
            else {
                $(`#time-left`).html(`EXPIRES NEXT BLOCK<span class="one">.</span><span class="two">.</span><span class="three">.</span>`);
            }
        }
        else {
            $(`#time-left`).html(`${hours}:${minutes}:${seconds}`);
        }
    }
}, 1000)

var rafflesData;

async function loadRafflesData() {
    rafflesData = await $.getJSON(data_file);
}

const getCocoBalance = async()=>{
    let userAddress = await getAddress();
    let cocoBalance = await coco.balanceOf(userAddress);
    $("#coco-balance").html(`${(Number(formatEther(cocoBalance))).toFixed(2)}`);
};

// General functions

provider.on("network", async(newNetwork, oldNetwork) => {
    if (oldNetwork) {
        location.reload();
    }
});


// - - - - - - - - - PROCESSING TRANSACTIONS - - - - - - - - -

const waitForTransaction = async(tx_) => {
    startLoading(tx_);
    provider.once(tx_.hash, async (transaction_) => {
        await endLoading(tx_, transaction_.status);
    });
};

// Resuming UI display, refreshing market for pending txs across pages
var pendingTransactions = localStorage.getItem("CocoPendingTxs");

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
    localStorage.removeItem("CocoPendingTxs");
}

function cachePendingTransactions() {
    localStorage.setItem("CocoPendingTxs", JSON.stringify(Array.from(pendingTransactions)));
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
}

setInterval(async()=>{
    await updateInfo();
    await getCocoBalance();
    await updateEntries();
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
    await checkCocoApproval();
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
    if (!(await getAddress())) {
        console.log("using infura")
        await loadInfuraRaffles();
    }
    else {
        console.log("using wallet")
        await updateInfo();
        await loadRafflesData();
        await getLatestRaffle();
        await loadPastRaffles();
        await getCocoBalance();
    }
};

window.onunload = async()=>{
    cachePendingTransactions();
}
