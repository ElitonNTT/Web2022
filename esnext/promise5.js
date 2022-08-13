function funcionarOuNao(valor, chanceErro){
  return new Promise((resolve, reject) => {
    // pode tratar o erro aqui dentro também, usando Try {}
    if(Math.random() < chanceErro){
      reject('Ocorreu um erro!')
    }else{
      resolve(valor)
    }
  })
}

funcionarOuNao('Testando...', 0.1) // chance de gerar erro do Reject em 10%
  .then(valor => console.log(`Valor: ${valor}`))
  .then(exemploErro => consol.log(exemploErro)) // gerando erro proposital
  .then(
    erroEncadeado => consol.log(erroEncadeado),
    err => console.log(`Erro Encadeado.: ${err}`)
    ) // gerando erro encadeado dentro do THEN, funciona primeiro como Resolve (erro encadeado) e depois Reject (err).
    //Este erro é lido dentro do Then, assim não é lido pelo console da linha de baixo
  .catch(err => console.log(`Erro: ${err}`)) // tratando um erro da Promise, via de regra, sempre deixar o catch por ultimo, para tratar todos os erros
  .then(() => console.log('Fim!'))

  // CATCH SEMPRE EM ÚLTIMO POIS ELE "ZERA" O VALOR DO THEN ANTERIOR