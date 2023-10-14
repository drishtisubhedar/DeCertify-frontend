const { ethers } = require("ethers");

const INFURA_ID = 'b4698c3b62f042dcbcf08770b29a0663'
const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/${INFURA_ID}`)

const abi = [//change the functions
    // "function name() view returns (string)",
    // "function symbol() view returns (string)",
    // "function totalSupply() view returns (uint256)",
    // "function balanceOf(address) view returns (uint)",
    [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_instituteName",
                    "type": "string"
                },
                {
                    "internalType": "address",
                    "name": "_instituteWallet",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "_instituteCourse",
                    "type": "string"
                }
            ],
            "name": "addInstitute",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_issuerId",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "_issuerName",
                    "type": "string"
                }
            ],
            "name": "addIssuer",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "store",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "idToIssuerName",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "listOfInstitutes",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "instituteName",
                    "type": "string"
                },
                {
                    "internalType": "address",
                    "name": "instituteWallet",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "instituteCourse",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "listOfIssuers",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "issuerId",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "issuerName",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
];

const address = '0x7667d22cF08911bF3A991A5F814Ce2BED11a8E82' // Contract Address
const contract = new ethers.Contract(address, abi, provider)

const main = async () => {
    const store = await contract.store()
    const addInstitute = await contract.addInstitute()
    const addIssuer = await contract.addIssuer()

    console.log(`\nReading from ${address}\n`)
    console.log(`Store: ${store}`)
    console.log(`Institute: ${addInstitute}`)
    console.log(`Issuer: ${addIssuer}`)
    //console.log(`Total Supply: ${totalSupply}\n`)

    const balance = await contract.balanceOf()

    console.log(`Balance Returned: ${balance}`)
    console.log(`Balance Formatted: ${ethers.utils.formatEther(balance)}\n`)
}

main()