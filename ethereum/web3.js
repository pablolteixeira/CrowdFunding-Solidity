import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
    window.ethereum.request({ method: "eth_requestAccounts" });
    web3 = new Web3(window.ethereum);
} else {
    const provider = new Web3.providers.HttpProvider("https://goerli.infura.io/v3/57affca6ff5841759b55794cf23c8a8c");
    web3 = new Web3(provider);
}

export default web3;