const { HDNodeWallet, Mnemonic } = require("ethers");

function getAccounts (mnemonic) {
    const _mnemonic = Mnemonic.fromPhrase(mnemonic);
    const path = "m/44'/60'/0'/0/";
    const accounts = [];
    for (let i = 0; i < 10; i++) {
        const wallet = HDNodeWallet.fromMnemonic(_mnemonic, `${path}${i}`);
        accounts.push({
            address: wallet.address,
            private_key: wallet.privateKey
        });
    }
    return accounts;
}

module.exports = {
    getAccounts
}