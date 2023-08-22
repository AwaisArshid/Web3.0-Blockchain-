require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/aQOOOmPPsvuQwrbFga9WRug_b6vRqENg',
      accounts: ['4391296d2a07b1a2ed00fc1fbbee8aec873636ecd5bb49ce1871c25007846df7'],
    },
  },
};
