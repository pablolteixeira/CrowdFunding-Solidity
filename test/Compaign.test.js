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

    it("analyze created request propreties", async () => {
        const description = "Buy ink for the office";
        const value = "100";
        await campaign.methods.createRequest(description, value, accounts[1])
            .send({ from: accounts[0], gas: "1000000" });
        
        const request = await campaign.methods.requests(0).call();

        assert.equal(description, request.description);
        assert.equal(value, request.value);
        assert.equal(accounts[1], request.recipient);
        assert.equal(false, request.complete);
        assert.equal("0", request.approvalCount);
    });

    it("do not allows to a user approve a request without being entered", async () => {
        const description = "Buy ink for the office";
        const value = "100";

        await campaign.methods.createRequest(description, value, accounts[1])
            .send({ from: accounts[0], gas: "1000000" });

        let status;

        try {
            await campaign.methods.approveRequest(0)
                .send({ from: accounts[1], gas: "1000000" });
            status = 0;
        } catch(err) {
            status = 1;
        }
        
        assert(status);
    });

    it("allows to a user approve a request being entered", async () => {
        const description = "Buy ink for the office";
        const value = "100";

        await campaign.methods.createRequest(description, value, accounts[0])
            .send({ from: accounts[0], gas: "1000000" });
        

        let status;

        try {
            await campaign.methods.contribute().send({ from: accounts[1], gas: "1000000", value: "1000"});
            await campaign.methods.contribute().send({ from: accounts[2], gas: "1000000", value: "1000"});
            await campaign.methods.contribute().send({ from: accounts[3], gas: "1000000", value: "1000"});
            await campaign.methods.contribute().send({ from: accounts[4], gas: "1000000", value: "1000"});
    
            await campaign.methods.approveRequest(0).send({ from: accounts[1], gas: "1000000" });
            await campaign.methods.approveRequest(0).send({ from: accounts[2], gas: "1000000" });
            await campaign.methods.approveRequest(0).send({ from: accounts[3], gas: "1000000" });
            await campaign.methods.approveRequest(0).send({ from: accounts[4], gas: "1000000" });
            
            status = 1;
        } catch(err) {
            console.log(err);
            status = 0;
        }

        assert(status);
    });

    it("do not allows to a managar finalize request without 70% of approvers accepted it", async () => {
        const description = "Buy ink for the office";
        const value = "100";

        await campaign.methods.createRequest(description, value, accounts[0])
            .send({ from: accounts[0], gas: "1000000" });
        

        let status;

        try {
            await campaign.methods.contribute().send({ from: accounts[1], gas: "1000000", value: "1000"});
            await campaign.methods.contribute().send({ from: accounts[2], gas: "1000000", value: "1000"});
            await campaign.methods.contribute().send({ from: accounts[3], gas: "1000000", value: "1000"});
            await campaign.methods.contribute().send({ from: accounts[4], gas: "1000000", value: "1000"});
            await campaign.methods.contribute().send({ from: accounts[5], gas: "1000000", value: "1000"});
    
            await campaign.methods.approveRequest(0).send({ from: accounts[1], gas: "1000000" });
            await campaign.methods.approveRequest(0).send({ from: accounts[2], gas: "1000000" });
            await campaign.methods.approveRequest(0).send({ from: accounts[3], gas: "1000000" });
        
            await campaign.methods.finalizeRequest(0).send({ from: accounts[0], gas: "1000000"});
            
            status = 0;
        } catch(err) {
            status = 1;
        }

        assert(status);
    });

    it("allows to a managar finalize request with more or 70% of approvers accepted it", async () => {
        const description = "Buy ink for the office";
        const value = "100";

        await campaign.methods.createRequest(description, value, accounts[0])
            .send({ from: accounts[0], gas: "1000000" });
        
        let status;

        try {
            await campaign.methods.contribute().send({ from: accounts[1], gas: "1000000", value: "1000"});
            await campaign.methods.contribute().send({ from: accounts[2], gas: "1000000", value: "1000"});
            await campaign.methods.contribute().send({ from: accounts[3], gas: "1000000", value: "1000"});
            await campaign.methods.contribute().send({ from: accounts[4], gas: "1000000", value: "1000"});
            await campaign.methods.contribute().send({ from: accounts[5], gas: "1000000", value: "1000"});
    
            await campaign.methods.approveRequest(0).send({ from: accounts[1], gas: "1000000" });
            await campaign.methods.approveRequest(0).send({ from: accounts[2], gas: "1000000" });
            await campaign.methods.approveRequest(0).send({ from: accounts[3], gas: "1000000" });
            await campaign.methods.approveRequest(0).send({ from: accounts[4], gas: "1000000" });
        
            await campaign.methods.finalizeRequest(0).send({ from: accounts[0], gas: "1000000"});
            
            status = 1;
        } catch(err) {
            status = 0;
        }

        assert(status);
    });

    it("allow recipient receive ", async () => {
        const description = "Buy ink for the office";
        const value = "100";

        await campaign.methods.createRequest(description, value, accounts[0])
            .send({ from: accounts[0], gas: "1000000" });
        
        await campaign.methods.contribute().send({ from: accounts[1], gas: "1000000", value: "1000"});
        await campaign.methods.contribute().send({ from: accounts[2], gas: "1000000", value: "1000"});

        await campaign.methods.approveRequest(0).send({ from: accounts[1], gas: "1000000" });
        await campaign.methods.approveRequest(0).send({ from: accounts[2], gas: "1000000" });

        const beforeCampaign = await web3.eth.getBalance(campaignAddress);
        const beforeAccount = await web3.eth.getBalance(accounts[0]);

        await campaign.methods.finalizeRequest(0).send({ from: accounts[0], gas: "1000000"});
        
        const afterCampaign = await web3.eth.getBalance(campaignAddress);
        const afterAccount = await web3.eth.getBalance(accounts[0]);
        
        const diff = beforeCampaign - (afterAccount - beforeAccount);

        console.log(diff);
        console.log(afterCampaign)
        assert.equal(afterCampaign, 0);
    });
});