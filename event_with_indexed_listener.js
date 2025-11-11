const ethers = require('ethers')
const { chain_info, test_contract } = require('./ganache_info')
const { getAccounts } = require('./accounts')

const accounts = getAccounts("vintage spawn parade become puzzle tortoise zebra sleep century bird popular certain")

async function main() {
    const rpcUrl = chain_info.rpcUrl
    const provider = new ethers.JsonRpcProvider(rpcUrl)

    const abiCoder = ethers.AbiCoder.defaultAbiCoder()

    const signer = await provider.getSigner(accounts[0].address)

    const counterAbi = test_contract.abi;

    const counterContract = new ethers.Contract(test_contract.address, counterAbi, signer)

    const filter = {
        address: test_contract.address,
        topics: [
            ethers.id("setCountEvent(uint256)"),
            abiCoder.encode(["address"], ["0xb10eF36844CaE2BbB5aaF05e7f501779A23b9ef1"])
            // ethers.zeroPadValue("0xRecipientAddress", 32)   // 仅监听接收人
        ]
    };

    provider.once(filter, result => {
        console.log('event listener result ======>', result);
        console.log('event params =====>', abiCoder.decode(["uint256"], result.data));
    })

    setTimeout(async () => {
        const tx = await counterContract.setCount(300);
    }, 3000)
}

main()