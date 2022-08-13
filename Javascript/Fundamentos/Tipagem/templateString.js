//crase usado para criar um "template String"

const nome = "Rebeca"
//modo padrão usado operador
const concatenacao = "Olá " + nome + " !"
console.log(concatenacao)

//modo usando crase
const template = `
Olá   
${nome}!`
console.log(template)
// usado crase neste caso pois ele suporta quebrar linhas (não é obrigado a sempre quebrar linhas ) e usado o "${}" para concatenar dentro da crase
// é o mesmo que isso aqui
const kappa = `Olá  ${nome} !`
console.log(kappa)

//modo Usando concat
console.log("Olá ".concat(nome).concat(" !"))


//expressoes na string
console.log(`1 + 1 = ${1+1}`) // ${ } usado para "interporlar dentro da string" 


// Função
const up  = texto => texto.toUpperCase() // const UP recebe TEXTO que foi transformada em uma função que modifica o texto para caixa alta.
// seta aponta "text" para receber uma função "toUpperCase()"
console.log(`Ei . . . ${up("cuidado")} !`)