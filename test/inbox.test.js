const assert = require('assert'); //assert is used to check the condition and if the condition is true then it will not do anything but if the condition is false then it will throw an error

const ganache = require('ganache'); //ganache is used to create a local ethereum network
const {Web3} = require('web3');  //web3 is used to interact with the ethereum network

const { abi, bytecode } = require('../compile'); //abi is the interface of the contract and bytecode is the compiled code of the contract

const web3 = new Web3(ganache.provider());  //ganache.provider() is used to connect to the ganache network

let accounts;
let inbox;

beforeEach(async () => {
    // Retrieve list of all accounts 
    accounts = await web3.eth.getAccounts();

     //console.log(accounts);

    // Deploy the contract
    //console.log('ABI:', abi);
    inbox = await new web3.eth.Contract(abi)
    //argument is specifies the constructor arguments for your smart contract. here we have set it to initial message
    .deploy({ data: bytecode, arguments: ["Hey this is Aditya"] }) //deploy actually dont deploy anything it creates an object that can be deployed
    .send({ from: accounts[0], gas: '1000000', type: '0x0'}); //send is used to send the transaction to the network
    
    //console.log('Contract deployed at address:', inbox.options.address);
    //console.log(inbox)

});

describe('Inbox', () => {
    it('deploys a contract', () => { 
        assert.ok(inbox.options.address); //assert.ok is used to check the condition and if the condition is true then it will not do anything but if the condition is false then it will throw an error
    });

    it('has a default message',async ()=>{
        
        const message =await inbox.methods.message().call() //call is used to call the function of the contract  
        assert.equal(message,'Hey this is Aditya') 
    })

    it('can change the message',async ()=>{
        await inbox.methods.setMessage("Chaning the message").send({from:accounts[0]}) //send is used to send the transaction to the network and from is used to specify the account from which the transaction is being sent
        const message=await inbox.methods.message().call() 


        // we dont assign any variable to bcause we get transaction hash 
    })

});



                           //NOTES 

//1. Web3 library is not just used to deploy networks but also to access to contracts that has already been deployed
//2. if our goal is to interact with deployed contract and create a contact then we need to know ABI 
//3. if we want to just create a contract we need to know bytecode 
//4. if we just want to interact with deployed contract we need to know address of deployed contract