require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey ensure success shadow shock note oval code grace neck equal gift'; 
let testAccounts = [
"0x82a13707c96bec6befebdcb66f08c5fc6537c9157bcd6b5580c2cdae1e43dd54",
"0x5378855e23a9ec5877a0a7ff37ce1fce0c74afdfed0c690026ecd8120364f02d",
"0x92d93d834aca1cc1b89c9f11f1eca94dd0cb84df30ccf63ad503d3204a74908d",
"0x5c8c93be12b547e9eb936b47d98c2df0fc97f492891a6a8431137fbff10024aa",
"0x67627a81018259f32eedb325032bee6e2368abbc2e4cb1e77db7d2f8877d86ed",
"0x00be7a2e0f7776946293d6db6bdbe9a24abc084252e2638bb39c6b516d391152",
"0xd03ff5f24f50a642fa78fe016da5ca44c0160fb847e5e7bfcc9143f730039680",
"0xc628bc44e9d7e458e7e2c0aac8170523a0296e66c3fea6c8e771b27f3ebf32e6",
"0x7f088d1cb2c932efbb9d1437fdf6518afa7da9d97f451029e192346807f299ee",
"0x9480405ed5628ecf945e95504564b30b50dfff144ac734ed59a9435dbd1859b9"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


