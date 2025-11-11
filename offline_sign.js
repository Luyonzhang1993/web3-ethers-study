const { ethers } = require("ethers");

const { chain_info, accounts } = require("./ganache_info");
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

async function getNonce(rpcUrl, address) {
    const provider = new ethers.JsonRpcProvider(rpcUrl);
    return await provider.getTransactionCount(address);
}

async function genTxSign(privateKey, tx) {
    const wallet = new ethers.Wallet(privateKey);
    console.log(wallet, 8080);
    return await wallet.signTransaction(tx);
}

async function genTx(to, abi, funcInfo, nonce) {
    const iface = new ethers.Interface(counterAbi);
    const data = iface.encodeFunctionData(funcInfo.name, funcInfo.params || []);
    return {
        to,
        // data: data.slice(0, 10),
        data,
        nonce,
        gasLimit: 100000n,
        maxFeePerGas: ethers.parseUnits("20000000000", "wei"),
        // maxPriorityFeePerGas: ethers.parseUnits("2", "gwei"),
        chainId: 1337
    };
}

async function main() {
    const nonce = await getNonce(chain_info.rpcUrl, accounts[0].address);
    const contractAddress = "0x5BA8ed2bF4d699C0B23a0810B642E08028755a41";
    const tx = await genTx(contractAddress, JSON.stringify(counterAbi), {name: "setCounter", params: [999]}, nonce);
    console.log('tx details:', tx);
    const txSigned = await genTxSign(accounts[0].private_key, tx);
    console.log("Signed Transaction:", txSigned);
    const provider = new ethers.JsonRpcProvider(chain_info.rpcUrl);
    try {
        const txHash = await provider.send("eth_sendRawTransaction", [txSigned]);
        console.log("✅ 交易已广播成功！");
        console.log("Tx Hash:", txHash);
    } catch (err) {
        console.error("❌ 广播失败:", err);
    }

}

main();