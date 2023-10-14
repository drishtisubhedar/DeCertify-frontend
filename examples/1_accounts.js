const { ethers } = require("ethers");

const INFURA_ID = 'b4698c3b62f042dcbcf08770b29a0663' //IPFS ID
const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/${INFURA_ID}`) //Provider

const address = '0x7667d22cF08911bF3A991A5F814Ce2BED11a8E82' //contact address then also just take a look

const main = async () => {
    const balance = await provider.getBalance(address)
    console.log(`\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`)
}

main()

