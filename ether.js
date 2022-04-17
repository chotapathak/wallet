const ethers=require('ethers');

let provider = ethers.getDefaultProvider('https://rinkeby.infura.io/v3/1f6173f0bb3f4b6a8fed022b5c37d0d4');

let privateKey = "0x7d190896adffad0ccd40d2287a1ba321d2410ecb1c188c0ca4a3d407124aeb57"
let wallet = new ethers.Wallet(privateKey, provider);
console.log(wallet);

let balancePromise = wallet.getBalance();

balancePromise.then((balance) => {
    console.log(balance);
});

let amount = ethers.utils.parseEther('0.001');

let tx = {
    to: "0x1481310fc1cf19e09ce284d74a05deb7576b88bc",
    // ... or supports ENS names
    // to: "ricmoo.firefly.eth",

    // We must pass in the amount as wei (1 ether = 1e18 wei), so we
    // use this convenience function to convert ether to wei.
    value: ethers.utils.parseEther('0.001')
};

let sendPromise = wallet.sendTransaction(tx);

sendPromise.then((tx) => {
    console.log("amount transfer",tx);
    // {
    //    // All transaction fields will be present
    //    "nonce", "gasLimit", "pasPrice", "to", "value", "data",
    //    "from", "hash", "r", "s", "v"
    // }
});

balancePromise.then((balance) => {
  console.log("balance after transfer",balance);
});


let transactionCountPromise = wallet.getTransactionCount();

transactionCountPromise.then((transactionCount) => {
    console.log("transaction count",transactionCount);
});