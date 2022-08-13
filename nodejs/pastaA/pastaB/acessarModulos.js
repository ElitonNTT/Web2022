const moduloA = require('../../modulo')
const moduloB = require('C:/Users/netin/Documents/Coding/Web2022/nodejs/modulo.js')
console.log(moduloA.ola)
console.log(moduloB.ola)

const saudacoes = require('saudacoes')
console.log(saudacoes.ola)

const c = require('./pastaC')
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) =>{
  res.write('Bom dia!')
  res.end()
}).listen(8080)