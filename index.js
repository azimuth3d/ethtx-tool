const EthereumTx = require('ethereumjs-tx')
const testData = require('./test.js')

const privateKey = new Buffer(testData.privateKey, 'hex')

function decimalToHexString(value) {
  return '0x' + parseInt(value, 10).toString(16)
}

testData.rawTx.nonce = decimalToHexString(testData.rawTx.nonce)
testData.rawTx.gasLimit = decimalToHexString(testData.rawTx.gasLimit)
testData.rawTx.gasPrice = decimalToHexString(testData.rawTx.gasPrice)
testData.rawTx.value = decimalToHexString(testData.rawTx.value)

console.log(JSON.stringify(testData.rawTx))
const tx = new EthereumTx(testData.rawTx)
tx.sign(privateKey)
const serializedTx = tx.serialize()

//console.log(tx.toJSON())
//console.log(`tx is  ${JSON.stringify(tx)}`)
console.log(`serializedTx is ${'0x' + serializedTx.toString('hex')}`)
