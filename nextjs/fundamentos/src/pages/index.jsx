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
      <Navegador destino="/exemplo" texto="Exemplo" cor="crimson" />
      <Navegador destino="/jsx" texto="JSX" cor="#9400d3" />
      <Navegador destino="/navegacao" texto="Navegacao #1" cor="#9400d3" />
      <Navegador destino="/cliente/sp/321" texto="Navegacao #2" cor="#9400d3" />
    </div>
  );
}
