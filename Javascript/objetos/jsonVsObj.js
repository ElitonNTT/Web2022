const obj = {
  a:1, 
  b:2, 
  c:3, 
  soma (){ 
    return a+b+c
  }
}
console.log(JSON.stringify(obj)) // transformado o obj em um "Texto JSON"

// console.log(JSON.parse("{a:1, b:2, c:3} ")) // erro 
//console.log(JSON.parse("{'a': 1, 'b':2, 'c':3}")) // erro também
console.log(JSON.parse('{"a":1, "b":2, "c":3}')) // JSON VÁLIDO
console.log(JSON.parse('{"a": 1, "b": "String", "c": true, "d":{}, "e":[]}')) // Qualquer texto ou atributo em JSON deve ser ditado com Aspas Duplas ""

// Ferramentas útei como JSON validator  (jsonlint.com)
const tipoJson = {  // MODELO JSON ABAIXO - Sempre aspas Duplas
  "nome" : "Ana",
  "idade" : 56,
  "legal" : true,
  "filhos" : [{
    "nome" : "Junior",
    "idade" : 18
  },{
    "legal" : "false"
  }],
  "cidade":"Anápolis"
}

// JSON.stringify para transformar em JSON
// JSON.parse para traduzir um JSON