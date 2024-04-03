const path=require('path'); // path module
const fs=require('fs');     // file system module
const solc=require('solc'); // solidity compiler

const inboxPath=path.resolve(__dirname,'contracts','Inbox.sol'); // path to Inbox.sol
const source=fs.readFileSync(inboxPath,'utf8'); // read the source code of Inbox.sol

const input = {
    language: 'Solidity', // language used
    sources: {
        'Inbox.sol': {
            content: source    // source code of Inbox.sol
        }
    },
    settings: {
        outputSelection: {
            '*': {             // return all output
                '*': ['*']  // return everything
            }
        }
    }
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));

console.log(output);