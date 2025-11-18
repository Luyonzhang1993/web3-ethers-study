const ethers = require('ethers');
const {chain_info} = require("./ganache_info");

async function main () {
    const provider = new ethers.EtherscanProvider(undefined, 'YY7R5D1MSAHYQHM26BA97SIZAN6SHNBE3Y')
    const balance = await provider.getBalance('vitalik.eth');
    console.log('Vitalik balance =====>', ethers.formatEther(balance));
}

main();