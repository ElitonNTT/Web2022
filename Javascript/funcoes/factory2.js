function criarProduto(nome, preco){
  return {
    nome,
    preco,
    desconto: 0.1
  }
}

console.log(criarProduto('Eliton', 1500))
console.log(criarProduto('Hartaby', 1500))
console.log(criarProduto('Amorzinho', 'Sem Preço'))