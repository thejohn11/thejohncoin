const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('e2ac6efcc252954a1a06834c77788c6f570bd7b7e4ed93c6017956b3181c146a');
const myWalletAddress = myKey.getPublic('hex');

let thejohnCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
thejohnCoin.addTransaction(tx1);


console.log('\nStarting the miner...');
thejohnCoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of axel is ', thejohnCoin.getBalanceOfAddress(myWalletAddress));

console.log('IS chain valid?', thejohnCoin.isChainValid());