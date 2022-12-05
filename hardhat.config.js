require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config()
require("./tasks/block-number")

const ETHERSCAN_APIKEY = process.env.ETHERSCAN_APIKEY
const RPC_URL = process.env.RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  etherscan: {
    apiKey: ETHERSCAN_APIKEY,
  },
  defaultNetwork: "hardhat",
  networks: {

    goerli: {
      url: RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 5,
    },
    // local hardhat network node
    local: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337,
    }
  }

};
