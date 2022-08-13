const valor = 'Global'

function minhaFuncao(){
  console.log(valor)
}

function exec(){
  const valor = 'local'
  minhaFuncao() // por mais que tenha sido declarado aqui e devesse ler 'local', a function não perder o contexto que foi declarado, logo ela resultado a linha 4 com o valor "Global"
}

exec()