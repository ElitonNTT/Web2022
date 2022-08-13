// EXEMPLO PERFEITO DE CRUD (CREAT, READ, UPDATE, DELETE)

const porta = 3003 // criando porta para servidor web

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const bancoDeDados = require('./bancodedados')

app.use(bodyParser.urlencoded({extended: true})) // para passar pelo URLENCODED

app.get('/produtos', (req, res, next) =>{
  res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) =>{
  res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next)=>{
  const produto = bancoDeDados.salvarProduto({
    name: req.body.name,
    preco: req.body.preco
  })
  res.send(produto) // converter para JSON para ir WEB
})
app.put('/produtos/:id', (req, res, next)=>{
  const produto = bancoDeDados.salvarProduto({
    id: req.params.id,
    name: req.body.name,
    preco: req.body.preco
  })
  res.send(produto) // converter para JSON para ir WEB
})

app.delete('/produtos/:id', (req, res, next)=>{ // função para excluir
  const produto = bancoDeDados.excluirProdutos(req.params.id) 
  res.send(produto)
})

app.listen(porta,  () => {
  console.log(`Servidor está executando porta ${porta}.`)
})