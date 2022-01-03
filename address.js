const Web3 = require("web3");

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
}

account = web3.eth.accounts.create();

console.log(`address: ${account.address}`);
console.log(`privateKey: ${account.privateKey}`);

wallet = web3.eth.accounts.wallet.create(2);
console.log(wallet);