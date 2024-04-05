
const assert = require('assert'); // assertion module is used in testing to compare the actual output with the expected output
const ganache = require('ganache'); // ganache is used to create a local ethereum network 
const {Web3} = require('web3'); //// web3 is used to interact with the ethereum network

// web3 and ganche communicate through a provider understand it as a telephone

const web3 = new Web3(ganache.provider()); // constructor function to create an instance of web3 different from Web3 


