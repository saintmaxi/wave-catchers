// Ethers.js Implementation by 0xInuarashi, saintmaxi


/*********************************************************************************/
/********************************PRODUCTION CONFIG********************************/
/*********************************************************************************/

const MESAddress = "0x984b6968132DA160122ddfddcc4461C995741513";
const MESAbi = () => {
    return '[ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "to_", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "Claim", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "addCredits", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "uint256", "name": "yieldRateAdd_", "type": "uint256" } ], "name": "addYieldRate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "addressToYieldInfo", "outputs": [ { "internalType": "uint40", "name": "yieldRate_", "type": "uint40" }, { "internalType": "uint176", "name": "pendingRewards_", "type": "uint176" }, { "internalType": "uint40", "name": "lastUpdatedTime_", "type": "uint40" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" } ], "name": "allowance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "spender_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "approve", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "claimTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "claimTokensWithoutUpdatingBalances", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "deductCredits", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "getPendingClaimableTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "getStorageClaimableTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "getTotalClaimableTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "getYieldRateOfAddress", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "globalModulus", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "addresses_", "type": "address[]" } ], "name": "multiClaimTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "addresses_", "type": "address[]" } ], "name": "multiClaimTokensWithoutUpdatingBalances", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "to_", "type": "address[]" }, { "internalType": "uint256[]", "name": "amounts_", "type": "uint256[]" } ], "name": "multiTransfer", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "from_", "type": "address[]" }, { "internalType": "address[]", "name": "to_", "type": "address[]" }, { "internalType": "uint256[]", "name": "amounts_", "type": "uint256[]" } ], "name": "multiTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "addresses_", "type": "address[]" } ], "name": "multiUpdateReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "rawGPendingClaimableTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "rawGTotalClaimableTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "rawGetStorageClaimableTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "bool", "name": "bool_", "type": "bool" } ], "name": "setController", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "setNewOwner", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint40", "name": "yieldEndTime_", "type": "uint40" } ], "name": "setYieldEndTime", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "uint256", "name": "yieldRate_", "type": "uint256" } ], "name": "setYieldRate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "uint256", "name": "yieldRateSub_", "type": "uint256" } ], "name": "subYieldRate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "transfer", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "updateReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "yieldEndTime", "outputs": [ { "internalType": "uint40", "name": "", "type": "uint40" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "yieldStartTime", "outputs": [ { "internalType": "uint40", "name": "", "type": "uint40" } ], "stateMutability": "view", "type": "function" } ]';
};

const etherscanBase = `https://etherscan.io/tx/`;

const satelliteAddress = "0x69F7f7053024cd5923A11718F3A28cC62F2AF3a7";
const satelliteAbi = () => {
    return `[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldOwner_","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner_","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"burner_","type":"address"},{"indexed":true,"internalType":"string","name":"projectName_","type":"string"},{"indexed":false,"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"SatelliteBurnForWL","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"minter_","type":"address"},{"indexed":true,"internalType":"address","name":"contractAddress_","type":"address"},{"indexed":false,"internalType":"address","name":"tokenAddress_","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokensPerMint_","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount_","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensDeducted_","type":"uint256"},{"indexed":false,"internalType":"bool","name":"useCredits_","type":"bool"}],"name":"SatelliteMint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"minter_","type":"address"},{"indexed":true,"internalType":"address","name":"contractAddress_","type":"address"},{"indexed":false,"internalType":"address","name":"tokenAddress_","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokensPerMint_","type":"uint256"},{"indexed":false,"internalType":"uint16","name":"amountMinted_","type":"uint16"},{"indexed":false,"internalType":"address","name":"receiverAddress_","type":"address"}],"name":"SatelliteTransferForMint","type":"event"},{"inputs":[],"name":"MES","outputs":[{"internalType":"contract iMES","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MESAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"projectName_","type":"string"},{"internalType":"address","name":"tokenAddress_","type":"address"},{"internalType":"uint40","name":"tokensPerWL_","type":"uint40"},{"internalType":"uint16","name":"amountForWL_","type":"uint16"}],"name":"addBurnWLSetting","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contractAddress_","type":"address"},{"internalType":"address","name":"tokenAddress_","type":"address"},{"internalType":"uint40","name":"tokensPerMint_","type":"uint40"},{"internalType":"uint16","name":"amountForMint_","type":"uint16"},{"internalType":"uint16","name":"amountPerAddress_","type":"uint16"}],"name":"addSatelliteSetting","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contractAddress_","type":"address"},{"internalType":"address","name":"tokenAddress_","type":"address"},{"internalType":"uint40","name":"tokensPerMint_","type":"uint40"},{"internalType":"uint16","name":"amountForMint_","type":"uint16"},{"internalType":"uint16","name":"amountPerAddress_","type":"uint16"},{"internalType":"address","name":"receiverAddress_","type":"address"}],"name":"addTransferForMintSetting","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"addressToSatelliteMinted","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"addressToTransferForMintAmount","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"contractToSatelliteSettings","outputs":[{"internalType":"address","name":"tokenAddress_","type":"address"},{"internalType":"uint40","name":"tokensPerMint_","type":"uint40"},{"internalType":"uint16","name":"amountForMint_","type":"uint16"},{"internalType":"uint16","name":"amountPerAddress_","type":"uint16"},{"internalType":"uint16","name":"amountMinted_","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"contractToTransferForMintSettings","outputs":[{"internalType":"address","name":"tokenAddress_","type":"address"},{"internalType":"uint40","name":"tokensPerMint_","type":"uint40"},{"internalType":"uint16","name":"amountForMint_","type":"uint16"},{"internalType":"uint16","name":"amountPerAddress_","type":"uint16"},{"internalType":"uint16","name":"amountMinted_","type":"uint16"},{"internalType":"address","name":"receiverAddress_","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"projectToBurnWLSettings","outputs":[{"internalType":"address","name":"tokenAddress_","type":"address"},{"internalType":"uint40","name":"tokensPerWL_","type":"uint40"},{"internalType":"uint16","name":"amountForWL_","type":"uint16"},{"internalType":"uint16","name":"amountAllocated_","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"address","name":"","type":"address"}],"name":"projectToWL","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"projectName_","type":"string"},{"internalType":"bool","name":"useCredits_","type":"bool"}],"name":"satelliteBurnForWL","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contractAddress_","type":"address"},{"internalType":"address","name":"tokenAddress_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"},{"internalType":"bool","name":"useCredits_","type":"bool"}],"name":"satelliteMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contractAddress_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"},{"internalType":"bool","name":"useCredits_","type":"bool"}],"name":"satelliteTransferForMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner_","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]`;
};

/*********************************************************************************/
/***********************************DEV CONFIG************************************/
/*********************************************************************************/

// const MESAddress = "0xc59dE6fCA8AAb399c12f61C57Cb986B79a735821";
// const MESAbi = () => {
//     return '[ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "to_", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "Claim", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "addCredits", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "uint256", "name": "yieldRateAdd_", "type": "uint256" } ], "name": "addYieldRate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "addressToYieldInfo", "outputs": [ { "internalType": "uint40", "name": "yieldRate_", "type": "uint40" }, { "internalType": "uint176", "name": "pendingRewards_", "type": "uint176" }, { "internalType": "uint40", "name": "lastUpdatedTime_", "type": "uint40" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" } ], "name": "allowance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "spender_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "approve", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "claimTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "claimTokensWithoutUpdatingBalances", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "deductCredits", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "getPendingClaimableTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "getStorageClaimableTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "getTotalClaimableTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "getYieldRateOfAddress", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "globalModulus", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "addresses_", "type": "address[]" } ], "name": "multiClaimTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "addresses_", "type": "address[]" } ], "name": "multiClaimTokensWithoutUpdatingBalances", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "to_", "type": "address[]" }, { "internalType": "uint256[]", "name": "amounts_", "type": "uint256[]" } ], "name": "multiTransfer", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "from_", "type": "address[]" }, { "internalType": "address[]", "name": "to_", "type": "address[]" }, { "internalType": "uint256[]", "name": "amounts_", "type": "uint256[]" } ], "name": "multiTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "addresses_", "type": "address[]" } ], "name": "multiUpdateReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "rawGPendingClaimableTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "rawGTotalClaimableTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "rawGetStorageClaimableTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "bool", "name": "bool_", "type": "bool" } ], "name": "setController", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "setNewOwner", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint40", "name": "yieldEndTime_", "type": "uint40" } ], "name": "setYieldEndTime", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "uint256", "name": "yieldRate_", "type": "uint256" } ], "name": "setYieldRate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "uint256", "name": "yieldRateSub_", "type": "uint256" } ], "name": "subYieldRate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "transfer", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "updateReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "yieldEndTime", "outputs": [ { "internalType": "uint40", "name": "", "type": "uint40" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "yieldStartTime", "outputs": [ { "internalType": "uint40", "name": "", "type": "uint40" } ], "stateMutability": "view", "type": "function" } ]';
// };

// const etherscanBase = `https://rinkeby.etherscan.io/tx/`;

/*********************************END CONFIG************************************/

// Initiate Provider 
const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
const signer = provider.getSigner();

// Initiate Contracts
const MES = new ethers.Contract(MESAddress, MESAbi(), signer);
const satelliteStation = new ethers.Contract(satelliteAddress, satelliteAbi(), signer);

// General Functions
const connect = async() => { await provider.send("eth_requestAccounts", []) };
const getAddress = async() => { try { return await signer.getAddress(); } catch { return false; }}; 
const formatEther = (balance_) => { return ethers.utils.formatEther(balance_) }; // divides by 18 modulus
const parseEther = (eth_) => { return ethers.utils.parseEther(eth_) }; // multiplies by 18 modulus
const getChainId = async() => { return await signer.getChainId() };

// General Variables
const maxInt = "115792089237316195423570985008687907853269984665640564039457584007913129639934";

// Approval Functions

//need to approve mes spend to satellite station

const getMESBalance = async(address_) => {
    return formatEther( (await MES.balanceOf(address_)) );
};

const getMESCredits = async(address_) => {
    return formatEther( (await MES.getTotalClaimableTokens(address_)) );
};

const claimMEScredits = async() => {
    const user = await getAddress();
    if ((await getMESCredits(user)) == 0) {
        await displayErrorMessage("Error: No $MES credits to claim!");
    }
    else {
        await MES.claimTokens(user).then( async(tx_) => {
            await waitForTransaction(tx_);
        });
    }
}

const mintWithMES  = async(contractAddress, withCredits) => {
    try {
        let numberToMint = Number($("#number-to-mint").text());
        if (withCredits) {
            await satelliteStation.satelliteMint(contractAddress, "0x984b6968132DA160122ddfddcc4461C995741513", numberToMint, true).then( async(tx_) => {
                await waitForTransaction(tx_);
            })
        }
        else {
            await satelliteStation.satelliteMint(contractAddress, "0x984b6968132DA160122ddfddcc4461C995741513", numberToMint, false).then( async(tx_) => {
                await waitForTransaction(tx_);
            })
        }
    }
    catch (error) {
        if ((error.message).includes("Not enough MES credits")) {
            await displayErrorMessage(`Error: Insufficient $MES credits for action!`);
        }
        else if ((error.message).includes("Not enough MES to")) {
            await displayErrorMessage(`Error: Insufficient $MES for action!`);
        }
        else if ((error.message).includes("Satellite Mint is not enabled yet!")) {
            await displayErrorMessage(`Error: Satellite Mint is not enabled yet!`);
        }
        else {
            await displayErrorMessage("Unknown error. See console output.");
            console.log(error);
        }
    }
}

const openMintPrompt = async(contractAddress, name, cost, max) => {
    let fakeJSX = `<div id="mint-prompt">
                        <div id="header-div" style="height:15%">
                        <h3 id="mint-prompt-header" class="section-head">Mint ${name}</h3>
                        <br>
                        </div>
                        <span id="close" onclick='closeDisplay()'>x</span>
                        <div id="mint-input">
                            <div class="mint-input-part">
                                <h4 class="section-head" id="number-to-mint-header">Number to Mint:</h4>
                                <h3 class="section-head">
                                    <span class="clickable increment-button" id="mint-minus" onclick="decrementClaim(${cost}, ${max})">⊖</span> 
                                    <span id="number-to-mint">1</span> 
                                    <span class="clickable increment-button" id="mint-plus" onclick="incrementClaim(${cost}, ${max})">⊕</span><br>
                                    <button id="max-button" onclick="setMaxMint(${cost}, ${max})">MAX</button>
                                </h3>
                            </div>
                            <div class="mint-input-part">
                                <h4 class="section-head">Cost:</h4>
                                <h3 class="section-head">
                                    <span id="current-cost">${cost}</span> 
                                </h3>
                            </div>
                        </div>
                        <div id="mint-button-div">
                            <button class="mint-button" onclick="mintWithMES('${contractAddress}', false)">MINT WITH BALANCE</button>
                            <button class="mint-button" onclick="mintWithMES('${contractAddress}', false)">MINT WITH CREDITS</button>
                        </div>
                    </div>`;
    $("body").append(fakeJSX);
    let height = $(document).height();
    $("body").append(`<div id='block-screen' onclick='closeDisplay()' style="height:${height}px"></div>`);
}

function decrementClaim(cost) {
    let currentClaim = Number($("#number-to-mint").text());
    if (currentClaim > 1) {
        let newClaim = currentClaim - 1;
        $("#number-to-mint").text(newClaim);
        $("#current-cost").text(newClaim * cost)
    }
}

function incrementClaim(cost, max) {
    let currentClaim = Number($("#number-to-mint").text());
    if (currentClaim != max) {
        let newClaim = currentClaim + 1;
        $("#number-to-mint").text(newClaim);
        $("#current-cost").text(newClaim * cost);
    }
}

function setMaxMint(cost, max) {
    $("#number-to-mint").text(max);
    $("#current-cost").text(max * cost)
}

// Processing txs

// After Tx Hook
const waitForTransaction = async(tx_) => {
    startLoading(tx_);
    provider.once(tx_.hash, async (transaction_) => {
        await endLoading(tx_, transaction_.status);
    });
};

// Resuming UI display, refreshing market for pending txs across pages
var pendingTransactions = localStorage.getItem("SatellitePendingTxs");

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
    localStorage.removeItem("SatellitePendingTxs");
}

function cachePendingTransactions() {
    localStorage.setItem("SatellitePendingTxs", JSON.stringify(Array.from(pendingTransactions)));
}

function startLoading(tx) {
    let txHash = tx.hash;
    const etherscanLink = `${etherscanBase}${txHash}`;
    const loadingDiv = `<a href="${etherscanLink}" class="etherscan-link" id="etherscan-link-${txHash}" target="_blank" rel="noopener noreferrer"><div class="loading-div" id="loading-div-${txHash}">PROCESSING<span class="one">.</span><span class="two">.</span><span class="three">.</span><br>CLICK FOR ETHERSCAN</div></a><br>`;
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
        await updateInfo();
        await loadCharacterSelect();
    }
}

// Workers
const updateInfo = async() => {
    const _address = !(await getAddress()) ? "CONNECT WALLET!" : (await getAddress());    
    if (_address === "CONNECT WALLET!") {
        return;
    }
    else {
        $("#account").text(`${_address.substr(0,9)}..`);
        $("#mobile-account").text(`${_address.substr(0,9)}..`);
        $("#account").addClass("connected-account");
        $("#mobile-account").addClass("connected-account");
    }

    $("#your-mes").html(`${await getMESBalance(_address)} `);
    $("#your-mes-credits").html(`${await getMESCredits(_address)} <div style="height:5px" class="hide-on-desktop"></div><span onclick="claimMEScredits()">CLAIM</span>`);
};

var loadedCollections = false;

const loadCollections = async() => {
    let collections = collectionsData["collections"];
    let liveJSX = "";
    let pastJSX = "";
    for (let i = 0; i < collections.length; i++) {
        let collection = collections[i];
        let name = collection["name"];
        let id = collection["id"];
        let collection_contract = new ethers.Contract(collection["contract"], collection["abi"].replaceAll(`'`, `"`), signer);
        let mint_info = await satelliteStation.contractToSatelliteSettings(collection_contract.address);
        let minted = mint_info["amountMinted_"];
        let total = mint_info["amountForMint_"];
        let button;
        if (collection["status"] == "LIVE") {
            if (minted != total) {
                button = `<button class="mint-prompt-button" id="${id}-mint-button" onclick="openMintPrompt('${collection["contract"]}', '${name}', ${collection["cost"]}, ${collection["max-mint"]})"">MINT</button>`;
            }
            else {
                button = `<button disabled class="mint-prompt-button button" id="${name}-mint-button">MINTED OUT</button>`;
            }
        }
        else if (collection["status"] == "COMPLETE") {
            button = `<a href="${collection["opensea-link"]}" style="text-decoration:none;color:black;" target="_blank"><button class="mint-prompt-button button">VIEW ON OPENSEA</button></a>`;
        }
        let fakeJSX = `<div class="partner-collection">
                        <img class="collection-img" src="${collection["image"]}">
                        <div class="collection-info">
                            <h3><a class="clickable" href="${collection["website"]}" target="_blank" style="text-decoration: none;">${name}⬈</a></h3>
                            <h4>${collection["cost"]} $COCO <br> <span id="${id}-supply">${minted}</span>/<span id="${id}-max-supply">${total}</span> Minted</h4>
                            <div class="inside-text collection-description">
                            ${collection["description"]}
                            </div>
                            ${button}
                        </div>
                       </div>`
        if (collection["status"] == "LIVE") {
            liveJSX += fakeJSX;
        }
        else if (collection["status"] == "COMPLETE") {
            pastJSX += fakeJSX;
        }
        collections_contracts.set(id, collection_contract);
    }
    $("#live-collections").empty();
    $("#past-collections").empty();
    $("#live-collections").append(liveJSX);
    $("#past-collections").append(pastJSX);
    loadedCollections = true;
}

var collectionsData;
var collections_contracts = new Map();

async function loadCollectionsData() {
    collectionsData = await $.getJSON('./data/partner-collections.json');
}

const updateSupplies = async() => {
    collections_contracts.forEach(async(contract, id) => {
        let mint_info = await satelliteStation.contractToSatelliteSettings(contract.address);
        let minted = mint_info["amountMinted_"];
        let total = mint_info["amountForMint_"];
        if (minted == total) {
            $(`#${id}-mint-button`).text("MINTED OUT");
            $(`#${id}-mint-button`).prop("disabled", true);
        }
        $(`${id}-supply`).text(minted);
        $(`${id}-max-supply`).text(total);
    });
}

setInterval( async() => {
    await updateInfo();
    if (loadedCollections) {
        await updateSupplies();
    }
}, 5000)

ethereum.on("accountsChanged", async (accounts_) => { 
    await updateInfo();
    location.reload();
});

window.onload = async() => {
    await updateInfo();
    await loadCollectionsData();
    await loadCollections();
};

window.onunload = async()=>{
    cachePendingTransactions();
}