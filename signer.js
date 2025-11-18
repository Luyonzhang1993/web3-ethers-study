const ethers = require('ethers');

async function main() {
    const provider = new ethers.JsonRpcProvider('http://127.0.0.1:7545');
    const signer = await provider.getSigner('0xEf481538E47a287127D44eD7Ff3F2B4F6d637376');
    console.log(signer);
}

main()