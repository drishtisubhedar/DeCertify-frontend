const { ethers } = require("ethers");

const INFURA_ID = 'b4698c3b62f042dcbcf08770b29a0663'
const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/${INFURA_ID}`)

const main = async () => {
    const block = await provider.getBlockNumber()

    console.log(`\nBlock Number: ${block}\n`)

    const blockInfo = await provider.getBlock(block)

    console.log(blockInfo)

    const { transactions } = await provider.getBlockWithTransactions(block)

    console.log(`\nLogging first transaction in block:\n`)
    console.log(transactions[0])
}

main()