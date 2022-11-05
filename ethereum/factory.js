import web3 from "./web3";
import CampaingFactory from "./build/CampaignFactory.json"

const instance = new web3.eth.Contract(
    CampaingFactory["abi"],
    "0xB2db8F325E23a84dd5e8952b4918Ef8C4AE0Aa5E"
);

export default instance;