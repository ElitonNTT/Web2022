function Pessoa(){
  this.idade = 0

  const self = this     // metodo atribuindo this à uma const "Self"
  setInterval(function(){
    self.idade++   // this.idade
    console.log(self.idade) // this.idade
  }/*.bind(this)*/, 1000)  // metodo usando bind
}
new Pessoa