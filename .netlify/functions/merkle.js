const ethers = require('ethers');
const { MerkleTree } = require('merkletreejs')
const keccak256 = require('keccak256')
const whitelist = require("./whitelist.json");

const merkleTree = new MerkleTree(
    whitelist, // Points to the whitelist.json
    keccak256,
    {hashLeaves: true, sortPairs: true}
)

const getProof = async(addr) => {
    const proof = merkleTree.getHexProof(keccak256(addr));
    return proof;
}

exports.handler = async function(event, context) {
    try {
      let { addr } = event.queryStringParameters || {};
      if (!addr) {
        return { statusCode: 400, body: "Missing query parameters" };
      }

      let checksumAddr;
      try {
        checksumAddr = ethers.utils.getAddress(addr);
      }
      catch {
        return { statusCode: 400, body: "Invalid address" };
      }
    
      let proof;
      let lowercaseAddr = addr.toLowerCase();
      if (whitelist.includes(checksumAddr)) {
        proof = await(getProof(checksumAddr));
      }
      else if (whitelist.includes(lowercaseAddr)) {
        proof = await(getProof(lowercaseAddr));
      }
      else {
        return { statusCode: 400, body: "Not in whitelist" };
      }
    
      return {
        statusCode: 200,
        headers: { "content-type": "application/json" },
        body: JSON.stringify(proof)
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

