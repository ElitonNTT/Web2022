const funcs = []

for ( let i = 0; i < 10; i++){
  funcs.push(function(){
      console.log(i)
  })
}

funcs[8]()
funcs[6]()
funcs[2]()



// diferente de quando usamos VAR, com let funciona