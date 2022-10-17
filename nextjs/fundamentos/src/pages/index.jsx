import Navegador from "../components/Navegador";
export default function Inicio() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        height: "100vh",
      }}
    >
      <Navegador destino="/estiloso" texto="Estiloso" />
      <Navegador destino="/exemplo" texto="Exemplo" cor="dodgerblue" />
      <Navegador destino="/jsx" texto="JSX" />
    </div>
  );
}
