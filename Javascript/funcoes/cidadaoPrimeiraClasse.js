// função em JS é First-Class Objetc ( Citizens)
// Higher-order Function


// Função em forma Literal
function fun1(){ 

}

// Armazenar em uma Variável
const fun2 = function ( ) { 

}

// Armazenar em um Array
const array = [function (a,b ){ return a + b }, fun1, fun2]
console.log(array[0](2,3))

// armazenar em um atriburo de objeto
const obj = {}
obj.falar = function () { return 'opa'}
console.log(obj.falar())

//Passar função como Parametro
function run (fun){
  fun()
}
run(function () {console.log("executando...")})

//Uma função pode Retornar/Conter uma função
function soma (a,b){
  return function (c){
    console.log(a+b+c)
  }
}
soma(2,5)(5)
const cincoMais = soma(2,3)
cincoMais(4)