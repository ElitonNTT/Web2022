function divide(num1, num2){
  const resultado = num1 / num2
  const resto =  resultado % 1
  const restofloor = Math.floor(resto)
  return (
    console.log(`Resultado da divião ${resultado}, restante ${restofloor}`)
  )
}
divide(63,7)