const path=require('path'); // path module
const fs=require('fs');     // file system module
const solc=require('solc'); // solidity compiler

const inboxPath=path.resolve(__dirname,'contracts','Inbox.sol'); // path to Inbox.sol
const source=fs.readFileSync(inboxPath,'utf8'); // read the source code of Inbox.sol

module.exports=solc.compile(source,1).contracts[':Inbox']; // compile the source code of Inbox.sol and exporting properties of Inbox.sol