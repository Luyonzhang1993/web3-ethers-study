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

    const tx = await counterContract.increment();
    await tx.wait();

    const currentCount = await counterContract.getCount()
    console.log("Current Count:", currentCount)

}

main()