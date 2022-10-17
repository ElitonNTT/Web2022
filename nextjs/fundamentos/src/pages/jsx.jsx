import Layout from "../components/Layout";
export default function Jsx() {
  const a = 5;
  const b = 2;
  const obj = { nome: "joao", idade: 30 };
  const titulo2 = <h1>Esse é o Titulo 2</h1>;
  console.log(a * b);
  function subtitulo() {
    return <h2>{"Muito legal subtitulo".toUpperCase()}</h2>;
  }

  return (
    <Layout titulo="Entendendo JSX">
      <div>
        <h1>JSX é um conceito central</h1>
        {titulo2}
        {subtitulo()}
        {"Muito legal".toUpperCase()}
        <p>{obj.nome}</p>
        <p>{JSON.stringify(obj)}</p>
        <p>{JSON.stringify({ nome: "joao", idade: 30 })}</p>
      </div>
    </Layout>
  );
}
