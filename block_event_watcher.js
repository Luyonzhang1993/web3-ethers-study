const ethers = require('ethers');

const provider = new ethers.EtherscanProvider(undefined, 'YY7R5D1MSAHYQHM26BA97SIZAN6SHNBE3Y')

provider.on('block', listener)
setTimeout(() => provider.off('block', listener), 10 * 1000)

function listener (data) {
    console.log('event data =====>' ,{data})
}