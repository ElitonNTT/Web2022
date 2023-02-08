import Layout from "../components/Layout";

// getStaticProps pode ser uma async function
export function getStaticProps() {
  return {
    props: {
      numero: Math.random(),
    },
  };
}
// se deixar somente assim, gera erro. Dai passamos o GetStaticProps
export default function Estatico(props) {
  return (
    <Layout titulo="Conteudo Estatico">
      <div>{props.numero}</div>
    </Layout>
  );
}
