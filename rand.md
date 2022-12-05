hardhat.org
yarn init
yarn add --dev hardhat
yarn hardhat --verbose to debug
yarn hardhat compile

artifact folder contains info about the compiled contract

yard add --dev prettier prettier-plugin-solidity
hardhat network is the default when using hardhad no need for ganache at defaultNetwork:"hardhat" inside config.js

automatically verify and deploy

people use tasks for dploying too but its better for plugins

yarn hardhat node to run a stable node on the terminal then setup like goreli