
var account;

// https://docs.walletconnect.com/quick-start/dapps/web3-provider
var provider = new WalletConnectProvider.default({
    rpc: {
      1: "https://cloudflare-eth.com/", // https://ethereumnodes.com/
      137: "https://polygon-rpc.com/", // https://docs.polygon.technology/docs/develop/network-details/network/
      // ...

    },
    // bridge: 'https://bridge.walletconnect.org',
});

async function connectWC(){
    console.log("here0")
    await provider.enable();

    //  Create Web3 instance
    const web3 = new Web3(provider);
    window.w3 = web3

    var accounts  = await web3.eth.getAccounts(); // get all connected accounts
    account = accounts[0]; // get the primary account

    var btndiv = document.getElementById("connectbtn");
    btndiv.innerHTML = "<button onclick=\"disconnectWC()\" class=\"btn btn-outline-danger btn-lg btn-block\">Disconnect Wallet Connect</button>"

}

async function disconnectWC(){
    // Close provider session
    await provider.disconnect()
    var btndiv = document.getElementById("connectbtn");
    btndiv.innerHTML = "<button onclick=\"connectWC()\" class=\"btn btn-outline-primary btn-lg btn-block\">Connect Wallet Connect</button>"
}


var sign = async (msg) => {
    if (w3) {
    return await w3.eth.personal.sign(msg, account)
    } else {
    return false
    }
}

var contract = async (abi, address) => {
    if (w3) {
    return new w3.eth.Contract(abi, address)
    } else {
    return false
    }
}


var address = "0x4b4f8ca8fb3e66b5ddafcebfe86312cec486dae1"
var abi = [{"inputs":[],"name":"count","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"increment","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}]