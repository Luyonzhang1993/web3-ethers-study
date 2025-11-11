const { HDNodeWallet, Mnemonic } = require("ethers");

const mnemonic = Mnemonic.fromPhrase("exile link explain goddess idle gym soup mimic crime habit foam room");
const path = "m/44'/60'/0'/0/";

const accounts = [];

for (let i = 0; i < 10; i++) {
    const wallet = HDNodeWallet.fromMnemonic(mnemonic, `${path}${i}`);
    accounts.push({
        address: wallet.address,
        private_key: wallet.privateKey
    });
}