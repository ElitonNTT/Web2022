const fs = require('fs') // "fs" (filesystem) é nativo do node = modulo core
const caminho = __dirname + '/arquivo.json'

// sincrono... cuidado com arquivos pesados, atrapalhar o event loop
const conteudo = fs.readFileSync(caminho, 'utf-8') // encode utf-8
console.log(conteudo)

// assincrono... 
fs.readFile(caminho, 'utf-8', (err, conteudo) =>{
  const config = JSON.parse(conteudo) // transformando em objeto
  console.log(`${config.db.host}:${config.db.porta}`)
})

// lendo arquivos JSON mais simples e já convertido para objeto
const config = require('./arquivo.json')
console.log(config.db)
console.log(config.db.host)
console.log(config.db.porta)

// lendo uma pasta usando fileSystem "fs", read dir ( ler diretorio)
// __dirname é uma váriavel que representa o diretório atual, é nativo do NODE
fs.readdir(__dirname, (err, arquivos) =>{
  console.log('Conteudo da Pasta...')
  console.log(arquivos)
})