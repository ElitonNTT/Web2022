//console.log(global)
// evitar editar objetos "globais", crie um novo

global.utilitarios = Object.freeze({
  saudacao(){
    return 'Estou em todos os Lugares, junto ao objeto Global'
  },
  nome: 'Sistema Legal'
})