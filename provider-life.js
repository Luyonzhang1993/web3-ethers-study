const ethers = require('ethers');

async function main() {
    // const provider = new ethers.JsonRpcProvider('HTTP://127.0.0.1:7545');
    const provider = new ethers.WebSocketProvider('ws://127.0.0.1:7545');
    const balance = await provider.getBalance('0xEf481538E47a287127D44eD7Ff3F2B4F6d637376');
    console.log(`Balance: ${ethers.formatEther(balance)} ETH`);
    await provider.pause(5000); // Pause for 5 seconds
    // const newBalance = await provider.getBalance('0xEf481538E47a287127D44eD7Ff3F2B4F6d637376');
    // console.log(`New Balance: ${ethers.formatEther(newBalance)} ETH`);
}

main()