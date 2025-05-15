export const contractAddress = "Your Address";
export const contractABI = [
  {
    "inputs": [
      { "internalType": "string", "name": "_name", "type": "string" },
      { "internalType": "string", "name": "_bloodGroup", "type": "string" }
    ],
    "name": "registerDonor",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "string", "name": "_bloodGroup", "type": "string" }
    ],
    "name": "collectBlood",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_id", "type": "uint256" }
    ],
    "name": "getBloodUnit",
    "outputs": [
      { "internalType": "string", "name": "", "type": "string" },
      { "internalType": "enum BloodBank.BloodStatus", "name": "", "type": "uint8" },
      { "internalType": "address", "name": "", "type": "address" },
      { "internalType": "address", "name": "", "type": "address" }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];
