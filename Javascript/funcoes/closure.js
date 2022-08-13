// Closure  é o escopo criado quando uma função é declarada ( contexto léxico)
// Esse escopo permite a função acessar e manipular variáveis externas à função

// Contexto léxico em ação

const x = 'Global'

function fora(){
  const x = 'local'
  function dentro(){
    return x
  }
  return dentro
}
const minhaFuncao = fora()
console.log(minhaFuncao()) // dentro do escopo (closure) fora()
console.log(x) // fora no escopo global