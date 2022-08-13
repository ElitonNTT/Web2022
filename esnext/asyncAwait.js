const http = require('http')

const getTurma = letra => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
  return new Promise((resolve, reject) => {
    http.get(url, res =>{
      let resultado = ''

      res.on('data', dados =>{
        resultado += dados
      })
      res.on('end', () =>{
        try{
          resolve(JSON.parse(resultado))
        }catch(e){
          reject(e)
        }
      })
    })
  })
}

// Recurso do ES8, recente
// Objetivo: Simplicar o uso de Promises
// await só funcionam com funções marcadas por "async"
let obterAlunos = async() => {
  const ta = await getTurma('A')
  const tb = await getTurma('B')
  const tc = await getTurma('C')
  return [].concat(ta,tb,tc)
} // isso retornará um objeto aync function
obterAlunos()
  .then(alunos => alunos.map(a => a.nome))
  .then(nomes => console.log(nomes))