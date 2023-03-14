import keccak256 from "keccak256";
import { MerkleTree } from "merkletreejs";
import { whitelistAddresses } from "./.whitelistedAddresses";

const leafNodes = whitelistAddresses.map((addr) => keccak256(addr));
const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });

export function getMerkleRoot() {
  return merkleTree.getHexRoot();
}

// Get proof per wallet:
export function getProof(address) {
  const kekked = keccak256(address);
  return merkleTree.getHexProof(kekked);
}
