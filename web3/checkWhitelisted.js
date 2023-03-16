//import keccak256 from "keccak256";
//import { MerkleTree } from "merkletreejs";
//import whitelistAddresses from "./.whitelistedAddresses.js";
const keccak256 = require("keccak256");
const { MerkleTree } = require("merkletreejs");
const whitelistAddresses = require("./.whitelistedAddresses.js");

const leafNodes = whitelistAddresses.map((addr) => keccak256(addr));
const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });

function getMerkleRoot() {
  return merkleTree.getHexRoot();
}

// Get proof per wallet:

// IMPORTANT: @luckyluciano , if this returns an empty array, the user is not verified to whitelist, call mint() instead with no proof attached.
function getProof(address) {
  const kekked = keccak256(address);
  return merkleTree.getHexProof(kekked);
}

module.exports = getProof;

//console.log(getProof("0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2"));
