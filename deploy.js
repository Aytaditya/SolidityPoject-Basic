const HDWalletProvider=require('@truffle/hdwallet-provider'); //truffle-hdwallet-provider is used to connect to the rinkeby network and also to connect to the account

const Web3=require('web3'); 
const {abi,bytecode}=require('./compile');

const provider =new HDWalletProvider(
    //mnuemonic is the first argument and second argument is url 
    "rotate valley average list misery tip soda fringe human wage area table","https://linea-goerli.infura.io/v3/4a0c53a5e4d34ddfa9725982d54c25b5"
)

const web3=new Web3(provider);

const deploy=async()=>{
    const accounts=await web3.eth.getAccounts();
    console.log('Attempting for deployement from : ' ,accounts[0])

    const result=await new web3.eth.Contract(abi)

    .deploy({data:bytecode,arguments:['Hi there!']})
    .send({from:accounts[0],gas:'1000000'})

    console.log('Contract deployed to:',result.options.address)
};

deploy();