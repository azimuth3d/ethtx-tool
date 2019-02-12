const EthereumTx = require('ethereumjs-tx')
const privateKey = Buffer.from(
  'e331b6d69882b4cb4ea581d88e0b604039a3de5967688d3dcffdd2270c0fd109',
  'hex'
)

/*
const txParams = {
  nonce: '0x00',
  gasPrice: '0x09184e72a000',
  gasLimit: '0x2710',
  to: '0x0000000000000000000000000000000000000000',
  value: '0x00',
  from: '0x0000000000000000000000000000000000000000',
  data: '',
  // data:
  //  '0x7f7465737432000000000000000000000000000000000000000000000000000000600057',
  // EIP 155 chainId - mainnet: 1, ropsten: 3
  chainId: 42
}
*/

var nonce = process.argv[2]
var gasPrice = process.argv[3]
var gasLimit = process.argv[4]
var to = process.argv[5]
var value = process.argv[6]
var from = process.argv[7]
var data = process.argv[8]
var chainId = process.argv[9]

const txParams = {
  nonce,
  gasPrice,
  gasLimit,
  to,
  value,
  from,
  data,
  chainId
}

const tx = new EthereumTx(txParams)
tx.sign(privateKey)
const serializedTx = tx.serialize()

console.log(`tx is  ${JSON.stringify(tx)}`)
console.log(`serializedTx is ${'0x' + serializedTx.toString('hex')}`)
