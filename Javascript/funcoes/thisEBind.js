const pessoa = {
  saudacao: 'Bom Dia',
  falar(){
      console.log(this.saudacao) // this neste caso se iguala ao objeto pessoa.
  }
}
pessoa.falar()

const falar = pessoa.falar   // vai gerar conflito
falar() // conflito entre parafigmas: Funcional e 00

const falarDePessoa = pessoa.falar.bind(pessoa) // binda ao objeto "this".
falarDePessoa() 

const falar2 = pessoa.falar.bind(pessoa) // neste caso não gera conflito.
falar2()