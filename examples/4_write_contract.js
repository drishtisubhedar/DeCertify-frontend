const { ethers } = require("ethers");

const INFURA_ID = 'b4698c3b62f042dcbcf08770b29a0663'
const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/${INFURA_ID}`)

const account1 = '' // Your account address 1
const account2 = '' // Your account address 2

const privateKey1 = '' // Private key of account 1
const wallet = new ethers.Wallet(privateKey1, provider)

const abi = [
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

const address = '0x7667d22cF08911bF3A991A5F814Ce2BED11a8E82'
const contract = new ethers.Contract(address, abi, provider)

const main = async () => {
    const balance = await contract.balanceOf(account1)

    console.log(`\nReading from ${address}\n`)
    console.log(`Balance of sender: ${balance}\n`)

    const contractWithWallet = contract.connect(wallet)

    const tx = await contractWithWallet.transfer(account2, balance)
    await tx.wait()

    console.log(tx)

    const balanceOfSender = await contract.balanceOf(account1)
    const balanceOfReciever = await contract.balanceOf(account2)

    console.log(`\nBalance of sender: ${balanceOfSender}`)
    console.log(`Balance of reciever: ${balanceOfReciever}\n`)
}

main()