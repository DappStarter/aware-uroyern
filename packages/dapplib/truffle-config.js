require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture roast frame ski struggle rice sadness coach include immense army genius'; 
let testAccounts = [
"0x881eb534c847027da71a4ffd200edca8ae7c196c785bb6968e22494798333943",
"0x301e06b88b46348a8f019072bec30016de617bdbc2d65bb0f4735e0c09de1cdd",
"0xd68b2fc431b0c98284926a298a90fffaebbeefe7b04b74c4bb6da52812e28867",
"0x0e124e93e00e9fc6945c56ecfb68db04c98925ed0a1b34cc141da2bce429a1a7",
"0xe9845d7c1f406a96b86bf50f24175ad34f463482061b305eba3c0004b5b129d4",
"0xc71e2cc7d7ebcc48ceaeabf82b867582ceb710336c34ab8f4172d7b47a46f0ea",
"0x07ee318ef206109cccd36636157341c0bba0b23bbd40f3ea61ef4911b9803eab",
"0x60d3c90d29edce7c6752f5f7a01998a6d5d4eaa427e5a667663820e83cb1362a",
"0x6019e761630347b249cc4faca7950e5a273e6d994ec194af6b81b8341f8c6078",
"0xc337d40a5ef179fb71bb4061a98fc77f4edd724cdf112293ba2e417650e3b1ed"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
