const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const campaignFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
    "under opera about entry remove office pride blossom pair school rabbit fruit",
    "https://goerli.infura.io/v3/57affca6ff5841759b55794cf23c8a8c"
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log("Attempting to deploy from account ", accounts[0]);
    
    const result = await new web3.eth.Contract(campaignFactory["abi"])
        .deploy({ data: campaignFactory["evm"]["bytecode"]["object"] })
        .send({ gas: "3000000", from: accounts[0] });

    console.log("Contract deployed to ", result.options.address);
    
    provider.engine.stop();
}

deploy();