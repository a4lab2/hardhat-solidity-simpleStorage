const { task } = require("hardhat/config")

task("block-number", "displays block number").setAction(
    async (taskArfs, hre) => {
        const blocknum = await hre.ethers.provider.getBlockNumber()
        console.log(`Block Number: ${blocknum}`)

    }
)

module.exports = {}

