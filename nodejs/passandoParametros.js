module.exports = function (...nomes){ // 3 pontos = argumento váriavel, posso passar quantos "nomes" eu quiser
  return nomes.map(nome => `Boa semana ${nome}!`)
}