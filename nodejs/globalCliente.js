require('./global') // não precisa adicionar à uma variável

console.log(utilitarios.saudacao()) // global.utilitarios criado no arquivo Global.js

// evitar esse tipo de código, dê preferência aos Modulos

utilitarios.nome = 'Eita!'
console.log(utilitarios.nome) // substituiu a frase "sistema legal", visto que está passivo de mudanças, podemos usar o freeze  (tirar do Global.js para ver a diferença)
// *evitar esse tipo de situação, dê preferência ao MODULOS *