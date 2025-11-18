const ethers = require('ethers');
const provider = new ethers.JsonRpcProvider('http://127.0.0.1:7545');

async function main() {
    const signer = await provider.getSigner(0);
    const tx = {
        to: '0x200b06576561D41cb5B86F5F6DE51FAAF24fedb8',
        value: ethers.parseEther('1')
    }

    const wallet = new ethers.Wallet('0xac97167ffe59cad87c1fdc35a3b1295e99c584d8c0cefc29044e70bdc10e9f0d').connect(provider);
    const transactionLike = await wallet.populateTransaction(tx);
    const data = await wallet.sendTransaction(transactionLike);
    console.log({ data });

}

main()