const EthereumTx = require('ethereumjs-tx')
const privateKey = Buffer.from(
  'e331b6d69882b4cb4ea581d88e0b604039a3de5967688d3dcffdd2270c0fd109',
  'hex'
)
var fs = require('fs')
var obj = JSON.parse(fs.readFileSync('test.json', 'utf8'))

const tx = new EthereumTx(obj)
tx.sign(privateKey)
const serializedTx = tx.serialize()

console.log(`tx is  ${JSON.stringify(tx)}`)
console.log(`serializedTx is ${'0x' + serializedTx.toString('hex')}`)
