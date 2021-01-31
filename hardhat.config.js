/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-etherscan");


const { alchemyApiKey, mnemonic, pvt1key } = require('./sregate');

module.exports = {
  networks: {
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${alchemyApiKey}`,
      accounts: {mnemonic: mnemonic}
    },
    mainnet: {
      url: `https://eth-mainnet.alchemyapi.io/v2/${alchemyApiKey}`,
      accounts: [pvt1key],
      chainId: 1,
      live: true,
      saveDeployments: true,
    },
  },
  etherscan: {
    apiKey: ""
  },  
  solidity: "0.7.3",
};