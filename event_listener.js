const ethers = require('ethers')
const { chain_info, test_contract } = require('./ganache_info')
const { getAccounts } = require('./accounts')

const accounts = getAccounts("vintage spawn parade become puzzle tortoise zebra sleep century bird popular certain")

async function main() {
    const rpcUrl = chain_info.rpcUrl
    const provider = new ethers.JsonRpcProvider(rpcUrl)

    const signer = await provider.getSigner(accounts[0].address)

    const counterAbi = test_contract.abi;

    const counterContract = new ethers.Contract(test_contract.address, counterAbi, signer)

    const filter = {
        address: test_contract.address,
        topics: [
            ethers.id("setCountEvent(address,uint256)"),
            // null,
            // ethers.zeroPadValue("0xRecipientAddress", 32)   // 仅监听接收人
        ]
    };

    provider.once(filter, result => {
        console.log('event listener result ======>', result);
        const abiCoder = ethers.AbiCoder.defaultAbiCoder()
        console.log('event params =====>', abiCoder.decode(["address", "uint256"], result.data));
    })

    setTimeout(async () => {
        const tx = await counterContract.setCount(300);
    }, 3000)
}

main()