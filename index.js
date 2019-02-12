const EthereumTx = require('ethereumjs-tx')
const testData = require('./test.js')
const Web3 = require('web3')
const privateKey = new Buffer(testData.privateKey, 'hex')

function decimalToHexString(value) {
  return '0x' + parseInt(value, 10).toString(16)
}

testData.rawTx.nonce = decimalToHexString(testData.rawTx.nonce)
testData.rawTx.gasLimit = decimalToHexString(testData.rawTx.gasLimit)
testData.rawTx.gasPrice = decimalToHexString(testData.rawTx.gasPrice)
testData.rawTx.value = decimalToHexString(testData.rawTx.value)

const tx = new EthereumTx(testData.rawTx)
tx.sign(privateKey)
const serializedTx = tx.serialize()

const txData = '0x' + serializedTx.toString('hex')
//console.log(tx.toJSON())
//console.log(`tx is  ${JSON.stringify(tx)}`)
console.log(`serializedTx is ${txData}`)

// connect to Infura node
const web3 = new Web3(
  new Web3.providers.HttpProvider('https://kovan.infura.io/')
)

function sendSigned(data, cb) {
  /* const privateKey = new Buffer(config.privKey, 'hex')
  const transaction = new Tx(txData)
  transaction.sign(privateKey)
  const serializedTx = transaction.serialize().toString('hex') */
  web3.eth.sendSignedTransaction(data, cb)
}

// fire away!
sendSigned(txData, function(err, result) {
  if (err) return console.log('error', err)
  console.log('sent', result)
})
