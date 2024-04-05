const assert = require('assert'); 
const ganache = require('ganache'); 
const {Web3} = require('web3');  
const { abi, bytecode } = require('../compile'); 

const web3 = new Web3(ganache.provider()); 

let accounts;
let inbox;

beforeEach(async () => {
    // Retrieve list of all accounts 
    accounts = await web3.eth.getAccounts();
    console.log(accounts);

    // Deploy the contract
    //console.log('ABI:', abi);
    inbox = await new web3.eth.Contract(abi)
    .deploy({ data: bytecode, arguments: ["Hey this is Aditya"] }) 
    .send({ from: accounts[0], gas: '1000000', type: '0x0'});
    console.log('Contract deployed at address:', inbox.options.address);
    console.log(inbox)

});

describe('Inbox', () => {
    it('deploys a contract', () => { 
        assert.ok(inbox.options.address); 
    });
});
