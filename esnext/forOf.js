for(let letra of "Netto"){
  console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for(let i in assuntosEcma){
  console.log(i)
}

// FOR OF - BEM MAIS SAFE
for(let assunto of assuntosEcma){
  console.log(assunto)
}

const assuntosMap = new Map([
  ['Map', {abordado: true}],
  ['Set', {abordado: true }],
  ['Promise', {abordado: false}]
])
for(let assunto of assuntosMap){
  console.log(assunto)
}
for(let chave of assuntosMap.keys()){
  console.log(chave)
}
for(let valor of assuntosMap.values()){
  console.log(valor)
}
for(let [chaves, valor] of assuntosMap.entries()){ // destructuring
  console.log(chaves, valor)
}

const s = new Set(['a', 'b', 'c'])
for(letra of s){
  console.log(letra)
}