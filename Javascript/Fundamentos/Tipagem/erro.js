function tratarErroeLancar(erro){
  //throw new Error('...')
  //throw 10
  //throw true
  //throw 'mensagem'
  throw {
    nome: erro.name,
    msg: erro.message,
    date: new Date
  }
}
function imprimirNome (obj){
  try{ // tenta executar
    console.log(obj.name.toUpperCase() + '!!!')
  } catch(e){ // se o try der erro isso aqui roda
    tratarErroeLancar(e)
  }finally{ // independente isso acontece no final
    console.log('final')
  }
}
const obj = { nome: 'Roberto'} // dá erro pois usamos NAME e aqui está declarado NOME, se consertar, passa no try.
imprimirNome(obj)