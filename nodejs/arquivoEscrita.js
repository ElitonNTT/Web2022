const fs = require('fs')

const frameworks = {
  nome: 'Expressjs, Sails, Koa, VueJs'
}

// criar arquivo usando fileSystem ( nome do diretorio + nome do arquivo a ser gerado, convertendo para JSON, err para validar erro)
fs.writeFile(__dirname + '/FrameWorksBackEnd.json', JSON.stringify(frameworks), err =>{
    console.log(err || 'Arquivo Salvo !')
})