const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");

const web3 = new Web3(ganache.provider());

const compiledFactoryCampaign = require("../ethereum/build/CampaignFactory.json");
const compiledCampaign = require("../ethereum/build/Campaign.json");

let accounts;
let factory;
let campaign;
let campaignAddress;

beforeEach(async ()=> {
    accounts = await web3.eth.getAccounts();

    factory = await new web3.eth.Contract(compiledFactoryCampaign["abi"])
        .deploy({ data: compiledFactoryCampaign["evm"]["bytecode"]["object"] })
        .send({ gas:"3000000", from: accounts[0] });

    await factory.methods.createCampaign("100").send({
        from: accounts[0], 
        gas: "1000000"
    });

    [campaignAddress] = await factory.methods.getDeployedCampaigns().call();
    
    campaign = await new web3.eth.Contract(
        compiledCampaign["abi"],
        campaignAddress
    );
});

describe("Campaigns", () => {
    it("deploys a factory and a campaign", () => {
        assert.ok(factory.options.address);
        assert.ok(campaign.options.address);
    });

    it("manager is equal to accounts[0]", async () => {
        const manager = await campaign.methods.manager().call();
        assert.equal(manager, accounts[0]);
    });

    it("allows people to contribute money and marks them as approvers", async () => {
        await campaign.methods.contribute().send({ from: accounts[1], value: "200" });
        const inApprovers = await campaign.methods.approvers(accounts[1]).call();
        
        assert(inApprovers);
    });

    it("requires a minimum contribution", async () => {
        let status;
        try {
            await campaign.methods.contribute().send({ from: accounts[1], value: "10" });
            status = false;
        } catch(err) {
            status = true;
        }

        assert(status);
    });

    it("allows a manager to make a payment request", async () => {
        try {
            await campaign.methods.createRequest("Buy ink for the office", "100", accounts[1])
            .send({ from: accounts[0], gas: "1000000" });
        } catch(err) {
            console.log(err);
        }
        
        const requestArray = await campaign.methods.requests(0).call();
        
        assert(requestArray);
    });
});