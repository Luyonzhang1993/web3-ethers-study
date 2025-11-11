const ethers = require('ethers')
const { accounts, chain_info } = require('./ganache_info')

const contractAddress = "0x5BA8ed2bF4d699C0B23a0810B642E08028755a41";

async function main() {
    const rpcUrl = chain_info.rpcUrl
    const provider = new ethers.JsonRpcProvider(rpcUrl)

    const signer = await provider.getSigner(accounts[0].address)

    const counterAbi = [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "addr",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "counter",
                    "type": "uint256"
                }
            ],
            "name": "CounterSetEvent",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "Counter",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "decrement",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getCounter",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "increment",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "counter",
                    "type": "uint256"
                }
            ],
            "name": "setCounter",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ];

    const counterContract = new ethers.Contract(contractAddress, counterAbi, signer)

    const tx = await counterContract.increment();
    await tx.wait();

    const currentCount = await counterContract.getCounter()
    console.log("Current Count:", currentCount)

}

main()
// const sepolia_info = {
//     rpcUrl: "https://sepolia.infura.io/v3/31bf2e7efc9247b0bee37d8e832482d0"
// }