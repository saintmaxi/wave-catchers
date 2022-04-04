// a saintmaxi joint
// onChainDiscordDirectory created by @0xInuarashi
/*********************************************************************************/
/********************************PRODUCTION CONFIG********************************/
/*********************************************************************************/

const wavecatchersAddress = "0x1A331c89898C37300CccE1298c62aefD3dFC016c";
const wavecatchersAbi = () => {
    return `[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"bytes32[]","name":"merkleProof","type":"bytes32[]"}],"name":"OGMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"bytes32[]","name":"_merkleProof","type":"bytes32[]"}],"name":"canClaimOG","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"collectionSize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"flipSaleState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isRevealed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"merkleRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextOwnerToExplicitlySet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"reserve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"reveal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleIsActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_defaultURI","type":"string"}],"name":"setDefaultURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_merkleRoot","type":"bytes32"}],"name":"setMerkleRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"wlSupplyLeft","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]`;
};

const cocoAddress = "0x133B7c4A6B3FDb1392411d8AADd5b8B006ad69a4";
const cocoAbi = () => { 
    return `[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DEFAULT_START_TIMESTAMP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"EMISSION_RATE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16[]","name":"_tokenIds","type":"uint16[]"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getRewardsForId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setWaveCatchersAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"waveCatchers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]`;
};

const cocoV2Address = "0x0Df016Fb18ef4195b2CF9d8623E236272ec52e14";
const cocoV2Abi = () => { 
    return `[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"EMISSION_RATE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"EMISSION_START_TIMESTAMP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16[]","name":"inDays","type":"uint16[]"},{"internalType":"uint256[]","name":"emissions","type":"uint256[]"}],"name":"addLockupPeriods","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"claimFromV1","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint16[]","name":"_tokenIds","type":"uint16[]"}],"name":"claimPassiveYield","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint16[]","name":"_tokenIds","type":"uint16[]"}],"name":"claimStakingRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cocov1","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_id","type":"uint16"}],"name":"getPassiveRewardsForId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getStakeDatas","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"_id","type":"uint16"}],"name":"getStakedRewardsForId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getStakes","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"marketplace","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setCocoV1Address","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setMarketplace","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setProxy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setWaveCatchersAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint16[]","name":"_tokenIds","type":"uint16[]"},{"internalType":"uint16[]","name":"_lockupDays","type":"uint16[]"},{"internalType":"bool","name":"claimPassiveRewardsFirst","type":"bool"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint16[]","name":"_tokenIds","type":"uint16[]"},{"internalType":"bool","name":"claimStakingRewardsFirst","type":"bool"}],"name":"unstake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"waveCatchers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]`;
};

const etherscanBase = `https://etherscan.io/tx/`;
const correctChain = 1;
const baseImageURI = "https://wavecatchers.mypinata.cloud/ipfs/QmSMd9zpdeJSr2rzLvcvrKtfDRvuz8PYhk7GqCNumsa4H7/";
const cocoImgURL = "https://github.com/saintmaxi/wave-catchers/blob/main/images/coco.png?raw=true";

/*********************************************************************************/
/********************************DEV CONFIG********************************/
/*********************************************************************************/

// const wavecatchersAddress = "0x8039C87E4F5417c467e81974E90d55A40A6877E8";
// const wavecatchersAbi = () => {
//     return `[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"bytes32[]","name":"merkleProof","type":"bytes32[]"}],"name":"OGMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"bytes32[]","name":"_merkleProof","type":"bytes32[]"}],"name":"canClaimOG","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"collectionSize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"flipSaleState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isRevealed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"merkleRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextOwnerToExplicitlySet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleIsActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_defaultURI","type":"string"}],"name":"setDefaultURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_merkleRoot","type":"bytes32"}],"name":"setMerkleRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]`;
// };

// const cocoAddress = "0x562DEa9BE18FbfABfFA28Ac7Ea2Be511C2A2ED9B";
// const cocoAbi = () => { 
//     return `[ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "DEFAULT_START_TIMESTAMP", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "EMISSION_RATE", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" } ], "name": "allowance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "approve", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "burnFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint16[]", "name": "_tokenIds", "type": "uint16[]" } ], "name": "claim", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "claimFree", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" } ], "name": "decreaseAllowance", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_id", "type": "uint256" } ], "name": "getRewardsForId", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" } ], "name": "increaseAllowance", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_address", "type": "address" } ], "name": "setWaveCatchersAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "transfer", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "waveCatchers", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" } ]`;
// };

// const cocoV2Address = "0xE86E0316d43A76281C544F07b4fF5545B702B017";
// const cocoV2Abi = () => { 
//     return `[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"EMISSION_RATE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"EMISSION_START_TIMESTAMP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16[]","name":"inDays","type":"uint16[]"},{"internalType":"uint256[]","name":"emissions","type":"uint256[]"}],"name":"addLockupPeriods","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"claimFromV1","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint16[]","name":"_tokenIds","type":"uint16[]"}],"name":"claimPassiveYield","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint16[]","name":"_tokenIds","type":"uint16[]"}],"name":"claimStakingRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cocov1","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_id","type":"uint16"}],"name":"getPassiveRewardsForId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getStakeDatas","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"_id","type":"uint16"}],"name":"getStakedRewardsForId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getStakes","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"marketplace","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ownerMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setCocoV1Address","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"emission_rate","type":"uint256"},{"internalType":"uint256","name":"start","type":"uint256"}],"name":"setEmissionStart","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setMarketplace","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"n","type":"string"},{"internalType":"string","name":"s","type":"string"}],"name":"setNameAndSymbol","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setWaveCatchersAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint16[]","name":"_tokenIds","type":"uint16[]"},{"internalType":"uint16[]","name":"_lockupDays","type":"uint16[]"},{"internalType":"bool","name":"claimPassiveRewardsFirst","type":"bool"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint16[]","name":"_tokenIds","type":"uint16[]"},{"internalType":"bool","name":"claimStakingRewardsFirst","type":"bool"}],"name":"unstake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"waveCatchers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]`;
// };

// const etherscanBase = `https://rinkeby.etherscan.io/tx/`;
// const correctChain = 4;
// const baseImageURI = "https://wavecatchers.mypinata.cloud/ipfs/QmSMd9zpdeJSr2rzLvcvrKtfDRvuz8PYhk7GqCNumsa4H7/";
// const cocoImgURL = "https://github.com/saintmaxi/wave-catchers/blob/main/images/coco.png?raw=true";

/*********************************END CONFIG************************************/

if (window.ethereum == undefined) {
    displayErrorMessage('Use a web3 enabled browser to claim $COCO!');
    $("#available-wavecatchers-images").empty();
    $("#available-wavecatchers-images").append("<br><h3>No Wave Catchers available...</h3>");
}

const provider = new ethers.providers.Web3Provider(window.ethereum,"any");
const signer = provider.getSigner();
const wavecatchers = new ethers.Contract(wavecatchersAddress, wavecatchersAbi(), signer);
const coco = new ethers.Contract(cocoAddress, cocoAbi(), signer);
const cocoV2 = new ethers.Contract(cocoV2Address, cocoV2Abi(), signer);

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

const importCocoToWallet = async() => {
    ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: cocoV2Address,
            symbol: 'COCO',
            decimals: 18,
            image: 'https://github.com/saintmaxi/wave-catchers/blob/main/images/coco.png?raw=true',
          },
        },
      });
}

// - - - - - - - - - APPROVAL FUNCTIONS - - - - - - - - -

// General Variables
const maxInt = "115792089237316195423570985008687907853269984665640564039457584007913129639934";

const approveWCToCocoV2 = async() => {
    await wavecatchers.setApprovalForAll(cocoV2Address, true).then (async(tx_) => {
        await waitForTransaction(tx_);
        $("#approval-button").html(`Approving<span class="one">.</span><span class="two">.</span><span class="three">.</span>`)
    });
}

const approveCocoConversion = async() => {
    await coco.approve(cocoV2Address, maxInt).then (async(tx_) => {
        await waitForTransaction(tx_);
        $("#approval-button-conversion").html(`Approving<span class="one">.</span><span class="two">.</span><span class="three">.</span>`)
    });
}

const checkConversionApproval = async() => {
    const userAddress = await getAddress();
    let conversionApproved = (Number(await coco.allowance(userAddress, cocoV2Address)) >= maxInt) ? true : false;
    if (conversionApproved) {
        $("#approval-button-conversion").prop("disabled",true);
        $("#approval-button-conversion").addClass("converted");
        $("#approval-button-conversion").html("Approved!");
    }
};

const checkStakingApproval = async() => {
    const userAddress = await getAddress();
    let stakingApproved = await wavecatchers.isApprovedForAll(userAddress, cocoV2Address);
    if (stakingApproved) {
        $("#approval-container").remove();
    }
    else {
        $("#approval-container").removeClass("hidden");
    }
};

// - - - - - - - - - MIGRATION FUNCTIONS - - - - - - - - -

const migrateCoco = async() => {
    try {
        let userAddress = await getAddress();
        let amount = await coco.balanceOf(userAddress);
        await cocoV2.claimFromV1(userAddress, amount).then( async(tx_) => {
            await waitForTransaction(tx_);
        }); 
    }
    catch (error) {
        if ((error.message).includes("Claims no longer accepted, emissions began")) {
            await displayErrorMessage(`Error: Migration window now closed!`);
        }
        else if ((error.message).includes("transfer amount exceeds allowance")) {
            await displayErrorMessage(`Error: Conversion not approved!`);
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

// - - - - - - - - - WAVE CATCHERS FUNCTIONS - - - - - - - - -

const getWaveCatchersEnum = async()=>{
    let userAddress = await getAddress();
    let totalWaveCatchers = await wavecatchers.balanceOf(userAddress);
    return totalWaveCatchers;
};

const getStakedWaveCatchersEnum = async()=>{
    let userAddress = await getAddress();
    let totalWaveCatchers = (await cocoV2.getStakes(userAddress)).length;
    return totalWaveCatchers;
};

const getWaveCatchersOwned = async() => {
    let userAddress = await getAddress();
    let totalWaveCatchers = await wavecatchers.balanceOf(userAddress);
    let ownedWaveCatchers = [];
    for (let i = 0; i < totalWaveCatchers; i++) {
        let id = Number(await wavecatchers.tokenOfOwnerByIndex(userAddress, i));
        ownedWaveCatchers.push(id);
    }
    return [...ownedWaveCatchers].sort((a, b) => a - b);
}

const getWaveCatchersStaked = async() => {
    let userAddress = await getAddress();
    let stakedWaveCatchers = (await cocoV2.getStakes(userAddress)).map(Number);
    return [...stakedWaveCatchers];
}

const getWaveCatchersStakedDurations = async() => {
    let userAddress = await getAddress();
    let durations = (await cocoV2.getStakeDatas(userAddress))[1].map(Number);
    return [...durations];
}

// - - - - - - - - - $COCO BALANCE FUNCTIONS - - - - - - - - -

const getCocoBalance = async()=>{
    let userAddress = await getAddress();
    let cocoBalance = await cocoV2.balanceOf(userAddress);
    $("#your-coco").html(`${(Number(formatEther(cocoBalance))).toFixed(2)}`);
};

const getCocoV1Balance = async()=>{
    let userAddress = await getAddress();
    let cocoBalance = await coco.balanceOf(userAddress);
    $("#your-v1-balance").html(`${(Number(formatEther(cocoBalance))).toFixed(2)}`);
};

const getPendingCocoV1Balance = async()=>{
    let userAddress = await getAddress();
    let totalWaveCatchers = await getWaveCatchersEnum();
    let pendingCoco = 0;
    for (let i = 0; i < totalWaveCatchers; i++) {
        let id = Number(await wavecatchers.tokenOfOwnerByIndex(userAddress, i));
        pendingCoco += Number(formatEther(await coco.getRewardsForId(id))); 
    }
    $("#claimable-coco-v1").html(`${pendingCoco.toFixed(2)}`);
};

const getPendingCocoBalance = async()=>{
    try {
        let userAddress = await getAddress();
        let totalWaveCatchers = await getWaveCatchersEnum();
        let pendingCoco = 0;
        for (let i = 0; i < totalWaveCatchers; i++) {
            let id = Number(await wavecatchers.tokenOfOwnerByIndex(userAddress, i));
            pendingCoco += Number(formatEther(await cocoV2.getPassiveRewardsForId(id))); 
        }
        $("#claimable-coco").html(`${pendingCoco.toFixed(2)}`);
    }
    catch (error) {
        console.log("Error occured checking passive rewards. Emissions likely not started.");
        $("#claimable-coco").html(`0.00`);
    }
};

const getPendingStakingCocoBalance = async()=>{
    let pendingCoco = 0;
    let stakedCatchersArr = await getWaveCatchersStaked();
    for (let i = 0; i < stakedCatchersArr.length; i++) {
        let id = stakedCatchersArr[i];
        pendingCoco += Number(formatEther(await cocoV2.getStakedRewardsForId(id))); 
    }
    $("#claimable-staking-coco").html(`${pendingCoco.toFixed(2)}`);
};

// - - - - - - - - - $COCO CLAIMING + STAKING FUNCTIONS - - - - - - - - -

const claimByIds = async()=>{
    if (selectedUnstaked.size == 0) {
        displayErrorMessage("Select at least 1 Wave Catcher to claim!")
    }
    else {
        let userAddress = await getAddress();
        const waveCatchersArray = Array.from(selectedUnstaked);
        await cocoV2.claimPassiveYield(userAddress, waveCatchersArray).then( async(tx_) => {
            selectedUnstaked = new Set();
            $("#selected-unstaked").text("None");
            $(".active").removeClass("active");
            await waitForTransaction(tx_);
        }); 
    }
};

const claimAll = async() => {
    const numWaveCatchers = await getWaveCatchersEnum();
    if (numWaveCatchers == 0) {
        displayErrorMessage("No Wave Catchers to claim for!")
    }
    else {
        let userAddress = await getAddress();
        const waveCatchersArray = await getWaveCatchersOwned();
        await cocoV2.claimPassiveYield(userAddress, waveCatchersArray).then( async(tx_) => {
            selectedUnstaked = new Set();
            $("#selected-unstaked").text("None");
            $(".active").removeClass("active");
            await waitForTransaction(tx_);
        }); 
    }
};

const claimAllV1 = async() => {
    const numWaveCatchers = await getWaveCatchersEnum();
    if (numWaveCatchers == 0) {
        displayErrorMessage("No Wave Catchers to claim for!")
    }
    else {
        const waveCatchersArray = await getWaveCatchersOwned();
        await coco.claim(waveCatchersArray).then( async(tx_) => {
            selectedForUnstaking = new Set();
            $("#selected-for-unstaking").text("None");
            $(".active").removeClass("active");
            await waitForTransaction(tx_);
        }); 
    }
};

const stakeByIdsHelper = async()=>{
    if (selectedUnstaked.size == 0) {
        displayErrorMessage("Select at least 1 Wave Catcher to stake!")
    }
    else {
        const waveCatchersArray = Array.from(selectedUnstaked);
        await openStakingPrompt(waveCatchersArray);
    }
};

const stakeAllHelper = async() => {
    const numWaveCatchers = await getWaveCatchersEnum();
    if (numWaveCatchers == 0) {
        displayErrorMessage("No Wave Catchers to stake!")
    }
    else {
        const waveCatchersArray = await getWaveCatchersOwned();
        await openStakingPrompt(waveCatchersArray);
    }
};

const stakeByIds = async(ids, lockup)=> {
    let userAddress = await getAddress();
    let lockups = Array(ids.length).fill(lockup);
    let claimPassive = !migrationOpen;
    await openConfirmPrompt(userAddress, ids, lockups, claimPassive);
};

const confirmStakeByIds = async(userAddress, ids, lockups, claimPassive)=> {
    try {
        await cocoV2.stake(userAddress, ids, lockups, claimPassive).then( async(tx_) => {
            $("#stake-popup").remove();
            $("#confirm-popup").remove();
            $("#block-screen-stake").remove();
            $("#block-screen-confirm").remove();
            selectedUnstaked = new Set();
            for (let i = 0; i < ids.length; i++) {
                $(`#wavecatcher-${ids[i]}`).remove();
            }
            $("#selected-unstaked").text("None");
            $(".active").removeClass("active");
            await waitForTransaction(tx_);
        }); 
    }
    catch (error) {
        if ((error.message).includes("transfer caller is not owner nor approved")) {
            await displayErrorMessage(`Error: Staking contract not approved!`);
        }
        else if ((error.message).includes("User denied transaction signature")) {
            console.log("Transaction rejected.");
        }
        else if ((error.message).includes("invalid lockup")) {
            await displayErrorMessage(`Error: Invalid lockup time!`);
        }
        else if ((error.message).includes("execution reverted")) {
            await displayErrorMessage(`Passive yield not started! Please uncheck claim box.`);
        }
        else {
            await displayErrorMessage("An error occurred. See console and window alert for details...")
            window.alert(error);
            console.log(error);
        }
    }
}

const claimStakedByIds = async()=>{
    if (selectedStaked.size == 0) {
        displayErrorMessage("Select at least 1 staked Wave Catcher to claim!")
    }
    else {
        let userAddress = await getAddress();
        const waveCatchersArray = Array.from(selectedStaked);
        await cocoV2.claimStakingRewards(userAddress, waveCatchersArray).then( async(tx_) => {
            selectedStaked = new Set();
            $("#selected-staked").text("None");
            $(".active").removeClass("active");
            await waitForTransaction(tx_);
        }); 
    }
};

const claimAllStaked = async() => {
    const numWaveCatchers = await getStakedWaveCatchersEnum();
    if (numWaveCatchers == 0) {
        displayErrorMessage("No staked Wave Catchers to claim for!")
    }
    else {
        let userAddress = await getAddress();
        const waveCatchersArray = await getWaveCatchersStaked();
        await cocoV2.claimStakingRewards(userAddress, waveCatchersArray).then( async(tx_) => {
            selectedStaked = new Set();
            $("#selected-staked").text("None");
            $(".active").removeClass("active");
            await waitForTransaction(tx_);
        }); 
    }
};

const unstakeByIds = async()=>{
    try {
        if (selectedStaked.size == 0) {
            displayErrorMessage("Select at least 1 Wave Catcher to unstake!")
        }
        else {
            let userAddress = await getAddress();
            const waveCatchersArray = Array.from(selectedStaked);
            await cocoV2.unstake(userAddress, waveCatchersArray, true).then( async(tx_) => {
                selectedStaked = new Set();
                for (let i = 0; i < waveCatchersArray.length; i++) {
                    $(`#wavecatcher-${waveCatchersArray[i]}`).remove();
                }
                $("#selected-staked").text("None");
                $(".active").removeClass("active");
                await waitForTransaction(tx_);
            }); 
        }
    }
    catch (error) {
        if ((error.message).includes("Token not unlocked")) {
            let errorMsg = selectedStaked.size > 1 ? "Error: Tokens still locked!" : "Error: Token still locked!";
            await displayErrorMessage(errorMsg);
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

const unstakeAll = async() => {
    try {
        const numWaveCatchers = await getStakedWaveCatchersEnum();
        if (numWaveCatchers == 0) {
            displayErrorMessage("No Wave Catchers staked!")
        }
        else {
            let userAddress = await getAddress();
            const waveCatchersArray = await getWaveCatchersStaked();
            await cocoV2.unstake(userAddress, waveCatchersArray, true).then( async(tx_) => {
                selectedStaked = new Set();
                $("#selected-staked").text("None");
                $(".active").removeClass("active");
                await waitForTransaction(tx_);
            }); 
        }
    }
    catch (error) {
        if ((error.message).includes("Token not unlocked")) {
            await displayErrorMessage(`Error: Tokens still locked!`);
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

const openStakingPrompt = async(ids) => {
    if (!($("#stake-popup").length)) {
        let fakeJSX = `<div id="stake-popup">
                        <div id="content">
                         <h1>Select lockup<span class="hide-on-mobile"> period</span></h1>
                         <p style="margin-left:0 !important;margin-right:0 !important;width:100%">
                            Unclaimed passive V2 $COCO will be claimed automatically on staking. You can unstake after the lockup period.
                         </p>
                         <button class="button" onclick="stakeByIds([${ids}], ${7})">7 DAYS (+10%)</button>
                         <button class="button" onclick="stakeByIds([${ids}], ${30})">30 DAYS (+25%)</button>
                         <button class="button" onclick="stakeByIds([${ids}], ${90})">90 DAYS (+50%)</button>
                        </div>
                       </div>`;
        $("body").append(fakeJSX);
        let height = $(document).height();
        $("body").append(`<div id='block-screen-stake' style="height:${height}px" onclick="$('#stake-popup').remove();$('#block-screen-stake').remove()"></div>`);
    }
}

const openConfirmPrompt = async(userAddress, ids, lockups, claimPassive) => {
    if (!($("#confirm-popup").length)) {
        let fakeJSX = `<div id="confirm-popup">
                        <div id="content">
                         <h1>Confirm Staking</h1>
                         <p style="margin-left:0 !important;margin-right:0 !important;width:100%">
                            NOTE: CLAIM V1 COCO FIRST!<br>V1 COCO is only claimable when your Wave Catcher is in your wallet. If you stake before claiming, you may not be able to unlock and claim
                             your remaining V1 COCO before migration closes.
                         </p>
                         <button class="button" onclick="confirmStakeByIds('${userAddress}', [${ids}], [${lockups}], ${claimPassive})">CONFIRM & STAKE</button>
                        </div>
                       </div>`;
        $("body").append(fakeJSX);
        let height = $(document).height();
        $("body").append(`<div id='block-screen-confirm' style="height:${height}px" onclick="$('#confirm-popup').remove();$('#block-screen-confirm').remove()"></div>`);
    }
}

// - - - - - - - - - DISPLAY FUNCTIONS - - - - - - - - -

var migrationOpen = true;

setInterval(async()=>{
        if (migrationOpen) {
            let now = Date.now() / 1000;
            let timestamp = Number(await cocoV2.EMISSION_START_TIMESTAMP());
            let distance = timestamp - now;
    
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
                if (blockTime > timestamp) {
                    migrationOpen = false;
                    $(`#migration-timer`).html("MIGRATION CLOSED!");
                }
                else {
                    $(`#migration-timer`).html(`ENDS NEXT BLOCK<span class="one">.</span><span class="two">.</span><span class="three">.</span>`);
                }
            }
            else {
                $(`#migration-timer`).html(`ENDS IN ${hours}:${minutes}:${seconds}`);
            }
        }
}, 1000)

var stakedCatchers = [];
var timerPending = [];
var loadedCatchers = false;

setInterval(async()=>{
    if (loadedCatchers) {
        for (let i = 0; i < stakedCatchers.length; i++) {
            if (timerPending[i]) {
                let id = stakedCatchers[i].id;
                let now = Date.now() / 1000;
                
                let timestamp = stakedCatchers[i].unlock;
                let distance = timestamp - now;
        
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
                    if (blockTime > timestamp) {
                        timerPending[i] = false;
                        $(`#unlock-info-${id}`).html("UNLOCKED!");
                    }
                    else {
                        $(`#unlock-info-${id}`).html(`PENDING<span class="one">.</span><span class="two">.</span><span class="three">.</span>`);
                    }
                }
                else {
                    $(`#timer-${id}`).html(`${hours}:${minutes}:${seconds}`);
                }
            }
        }
    }
}, 1000)


var currentlyUnstaked = [];
var currentlyStaked = [];

const getWaveCatchersImages = async()=>{
    loadedCatchers = false;
    stakedCatchers = [];
    timerPending = [];
    let idToStakedJSX = new Map();
    $("#available-wavecatchers-images").html(`<br><h3>Loading<span class="one">.</span><span class="two">.</span><span class="three">.</span></h3>`);
    $("#staked-wavecatchers-images").html(`<br><h3>Loading<span class="one">.</span><span class="two">.</span><span class="three">.</span></h3>`);

    const yourWaveCatchersCount = await getWaveCatchersEnum();
    if (yourWaveCatchersCount == 0) {
        $("#available-wavecatchers-images").html("<br><h3>No Wave Catchers available...</h3>");
    }
    else {
        const yourWaveCatchers = await getWaveCatchersOwned();
        currentlyUnstaked = yourWaveCatchers;
        let batchFakeJSX = "";
        for (let i = 0; i < yourWaveCatchers.length; i++) {
            let waveCatcherID = yourWaveCatchers[i];
            let active= "";
            if (selectedUnstaked.has(Number(waveCatcherID))) {
                active = "active";
            }
            let cocoEarned = await getPassiveCocoEarnedByID(waveCatcherID);

            batchFakeJSX += `<div id="wavecatcher-${waveCatcherID}" class="your-wavecatcher ${active}" onclick="selectUnstaked(${waveCatcherID})"><img src="${baseImageURI}${waveCatcherID}.png"><p class="wavecatcher-id">#${waveCatcherID}</p><p class="coco-earned"><span id="coco-earned-${waveCatcherID}">${cocoEarned}</span><img src="${cocoImgURL}" class="coco-icon"></p></div>`          
        };
        $("#available-wavecatchers-images").html(batchFakeJSX);
    }

    const yourStakedWaveCatchersCount = await getStakedWaveCatchersEnum();
    if (yourStakedWaveCatchersCount == 0) {
        $("#staked-wavecatchers-images").html("<br><h3>None staked...</h3>");
    }
    else {
        const yourStakedWaveCatchers = await getWaveCatchersStaked();
        const timesLeft = await getWaveCatchersStakedDurations();
        currentlyStaked = yourStakedWaveCatchers;
        for (let i = 0; i < yourStakedWaveCatchers.length; i++) {
            let waveCatcherID = yourStakedWaveCatchers[i];
            stakedCatchers.push({id: waveCatcherID, unlock: timesLeft[i]});
            timerPending.push(true);
            let active= "";
            if (selectedStaked.has(Number(waveCatcherID))) {
                active = "active";
            }
            let cocoEarned = await getStakingCocoEarnedByID(waveCatcherID);
            let unlockHTML = `<img src="https://github.com/saintmaxi/wave-catchers/blob/main/images/lock-img-white.png?raw=true" class="coco-icon"> IN <span id="timer-${waveCatcherID}"><span class="one">.</span><span class="two">.</span><span class="three">.</span></span>`;
            let fakeJSX = `<div id="wavecatcher-${waveCatcherID}" class="your-wavecatcher ${active}" onclick="selectStaked(${waveCatcherID})"><div class="img-div"><img src="${baseImageURI}${waveCatcherID}.png"><div class="unlock-wrapper"><p class="unlock-info" id="unlock-info-${waveCatcherID}">${unlockHTML}</p></div></div><p class="wavecatcher-id">#${waveCatcherID}</p><p class="coco-earned"><span id="coco-earned-${waveCatcherID}">${cocoEarned}</span><img src="${cocoImgURL}" class="coco-icon"></p></div>`;
            idToStakedJSX.set(waveCatcherID, fakeJSX);
        };
        let stakedJSX = "";
        let stakedIds = Array.from(idToStakedJSX.keys()).map(Number).sort(function(a, b){return a-b});
        for (const stakedId of stakedIds) {
            stakedJSX += idToStakedJSX.get(stakedId);
        }
        $("#staked-wavecatchers-images").html(stakedJSX);
    }
    loadedCatchers = true;
}

const getPassiveCocoEarnedByID = async(id) => {
    try {
        return Number(formatEther(await cocoV2.getPassiveRewardsForId(id))).toFixed(2);
    }
    catch {
        console.log('Metamask throws extra error. Token reward lookup was successful.')
        return 0;
    }
};


const getStakingCocoEarnedByID = async(id) => {
    try {
        return Number(formatEther(await cocoV2.getStakedRewardsForId(id))).toFixed(2);
    }
    catch {
        console.log('Metamask throws extra error. Token reward lookup was successful.')
        return 0;
    }
};

const updateCocoEarned = async() => {
    for (let i = 0; i < currentlyUnstaked.length; i++) {
        let waveCatcherID = Number(currentlyUnstaked[i]);
        let cocoEarnedByID = await getPassiveCocoEarnedByID(waveCatcherID);
        $(`#coco-earned-${waveCatcherID}`).html(`${cocoEarnedByID}`);
    };
    for (let i = 0; i < currentlyStaked.length; i++) {
        let waveCatcherID = Number(currentlyStaked[i]);
        let cocoEarnedByID = await getStakingCocoEarnedByID(waveCatcherID);
        $(`#coco-earned-${waveCatcherID}`).html(`${cocoEarnedByID}`);
    };
};

// - - - - - - - - - PAGE REFRESH HANDLERS - - - - - - - - -

const updateClaimingInfo = async()=>{
    if ((await getChainId()) === correctChain) {
        const loadingDiv = `<div class="loading-div" id="refresh-notification">REFRESHING <br>CLAIMING INTERFACE<span class="one">.</span><span class="two">.</span><span class="three">.</span>​</div><br>`;
        $("#pending-transactions").append(loadingDiv);
        await getCocoBalance();
        await getCocoV1Balance();
        let waveCatchersNum = await getWaveCatchersEnum();
        if (waveCatchersNum == 0) {
            $("#claimable-coco").text("0.0");
        }
        else {
            await getPendingCocoV1Balance();
            // await getPendingCocoBalance();
        }
        let stakedWaveCatchersNum = await getStakedWaveCatchersEnum();
        if (stakedWaveCatchersNum == 0) {
            $("#claimable-staking-coco").text("0.0");
        }
        else {
            await getPendingStakingCocoBalance();
        }
        $("#your-wavecatchers-num").html(`${waveCatchersNum}`);
        $("#your-staked-wavecatchers-num").html(`${stakedWaveCatchersNum}`);
        await getWaveCatchersImages();
        $("#error-popup").remove();
        $("#refresh-notification").remove();
    } 
    else {
        $("#wallet").text(`Wrong Network!`);
        $("#available-wavecatchers-images").html("Error: Wrong Network");
        $("#staked-wavecatchers-images").html("Error: Wrong Network");
        $("#your-coco").html(`0.0`);
        $("#claimable-coco").html(`0.0`);
        $("#claimable-staking-coco").text("0.0");
        $("#earn-rate").html("0.0");
        displayErrorMessage("Error: Wrong Network", false);
    }
};


// General functions

provider.on("network", async(newNetwork, oldNetwork) => {
    if (oldNetwork) {
        location.reload();
    }
});

//selection helpers

var selectedStaked = new Set();
var selectedUnstaked = new Set();

async function selectUnstaked(id) {
    if (!selectedUnstaked.has(id)) {
        selectedUnstaked.add(id);
        $(`#wavecatcher-${id}`).addClass("active");
    }
    else {
        selectedUnstaked.delete(id);
        $(`#wavecatcher-${id}`).removeClass("active");
    }
    if (selectedUnstaked.size == 0) {
        $("#selected-unstaked").text("None");
    }
    else {
        let selectedUnstakedArray = Array.from(selectedUnstaked).sort((a, b) => a - b);
        let selectedString = `${selectedUnstakedArray.join(' ')}`;
        $("#selected-unstaked").text(selectedString);
    }
}

async function selectStaked(id) {
    if (!selectedStaked.has(id)) {
        selectedStaked.add(id);
        $(`#wavecatcher-${id}`).addClass("active");
    }
    else {
        selectedStaked.delete(id);
        $(`#wavecatcher-${id}`).removeClass("active");
    }
    if (selectedStaked.size == 0) {
        $("#selected-staked").text("None");
    }
    else {
        let selectedStakedArray = Array.from(selectedStaked).sort((a, b) => a - b);
        let selectedString = `${selectedStakedArray.join(' ')}`;
        $("#selected-staked").text(selectedString);
    }
}

// Processing tx returns
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
    if (pendingTransactions.size == 0) {
        await updateClaimingInfo();
    }
}

setInterval(async()=>{
    await updateInfo();
    await checkStakingApproval();
    await checkConversionApproval();
    await updateCocoEarned();
    await getCocoV1Balance();
    await getPendingCocoV1Balance();
    await getPendingCocoBalance();
    await getPendingStakingCocoBalance();
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
    $("#account").addClass(`connected`);
    $("#mobile-account-text").html(`${userAddress.substr(0,7)}..`);
    // if (!chainLogoSet) {
    //     await setChainLogo();
    // }
};

ethereum.on("accountsChanged", async(accounts_)=>{
    location.reload();
});

window.onload = async()=>{
    await updateInfo();
    await checkConversionApproval();
    await checkStakingApproval();
    if (pendingTransactions.size < 1) {
        await updateClaimingInfo();
    }
};

window.onunload = async()=>{
    cachePendingTransactions();
}
