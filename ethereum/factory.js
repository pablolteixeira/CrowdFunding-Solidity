import web3 from "./web3";
import CampaingFactory from "./build/CampaignFactory.json"

const instance = new web3.eth.Contract(
    CampaingFactory["abi"],
    "0x1A300F99F2C7375e19Aa89F29A14F1b9e99A4F37"
);

export default instance;