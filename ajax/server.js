const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const multer = require('multer')

// middleware que provê todos os arquivos estaticos
app.use(express.static('.'))
// middleware que recebe QUALQUER json dentro do body e transforma em objeto
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


// multer -- configurações bem comuns para upload
const storage = multer.diskStorage({
  destination: function(req, file, callback){
    callback(null, '.') // local para armazenar, neste caso na pasta atual, referenciando um ponto
  },
  filename: function(req, file, callback){
    callback(null, `${Date.now()}_${file.originalname}`)
  }
})

const upload = multer({storage}).single('arquivo')
app.post('/upload', (req, res) =>{
  upload(req, res, err =>{
    if(err){
      return res.send('Ocorreu um Erro.')
    }
    res.end('Concluido com sucesso')
  })
})

app.post('/formulario', (req, res) =>{
  res.send({
    ...req.body,
    id: 1
  })
})
app.get('/parOuImpar', (req, res)=>{
  //req.body // req.query // req.params ---> express
  const par = parseInt(req.query.numero) % 2 === 0
  res.send({
    resultado: par ? 'par' : 'impar'
  })
})

// webservice
//app.get('/teste', (req, res )=> res.send(new Date))

// executando o servidor ( npm start )
app.listen(8080, () => console.log("Executando"))