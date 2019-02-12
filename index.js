const EthereumTx = require('ethereumjs-tx')
const testData = require('./test.js')

const privateKey = new Buffer(testData.privateKey, 'hex')

const tx = new EthereumTx(testData.rawTx)

tx.sign(privateKey)
const serializedTx = tx.serialize()

//console.log(tx.toJSON())
//console.log(`tx is  ${JSON.stringify(tx)}`)
console.log(`serializedTx is ${'0x' + serializedTx.toString('hex')}`)
