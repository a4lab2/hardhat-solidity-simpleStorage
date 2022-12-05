//import
const { ethers, run, network } = require("hardhat")
// const run=require("run")



//async main
async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
  console.log("Deploying Contract")
  const simpleStorage = await SimpleStorageFactory.deploy()
  await simpleStorage.deployed()
  console.log(`Deployed Contract to address:${simpleStorage.address}`)
  console.log(network.config)
  if (network.config.chainId == 4 && process.env.ETHERSCAN_APIKEY) {
    await simpleStorage.deployTransaction.wait(6)//wait 6 blocks to be sure 
    await verify(simpleStorage.address, [])//then verify
  }

  // retrieve  currentFavoriteNumber
  const currentFavoriteNumber = await simpleStorage.retrieve()
  console.log(`Current Favourite Number: ${currentFavoriteNumber.toString()}`)

  //update and retirve
  const transactionResponse = await simpleStorage.store("7")
  const txnReciept = await transactionResponse.wait(1);
  const updatedFav = await simpleStorage.retrieve()
  console.log(`Updated Favourite Number: ${updatedFav.toString()}`)

}
//auto verification works on hardhat-etherscan
async function verify(contractAddress, args) {
  console.log("Verifying Contract.....")
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    })
  } catch (error) {
    if (error.message.toLowerCase().includes("already verified")) {
      console.log(error)
    }
  }


}
// main()
main().then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })