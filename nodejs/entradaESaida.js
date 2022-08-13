const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo) // executavel pelo terminal usando "node entradaESaida.js -a"

if(anonimo){
  process.stdout.write('Fala Anonimo!\n')
  process.exit()
}else{
  process.stdout.write('Informe seu nome: ')
  process.stdin.on('data', data =>{
    const nome = data.toString().replace('\n','')

    process.stdout.write(`Fala ${nome}!!\n`)
    process.exit()
  })
}

// Process nativo de javascript, usado para entradas e saidas padrões. stdout para saida, stdin para receber