const { ethers } = require("ethers");

const INFURA_ID = 'b4698c3b62f042dcbcf08770b29a0663'
const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/${INFURA_ID}`)

const abi = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",

    "event Transfer(address indexed from, address indexed to, uint amount)"
];

const address = '0x7667d22cF08911bF3A991A5F814Ce2BED11a8E82' // Contract address
const contract = new ethers.Contract(address, abi, provider)

const main = async () => {
    const block = await provider.getBlockNumber()

    const transferEvents = await contract.queryFilter('Transfer', block - 1, block)
    console.log(transferEvents)
}

main()