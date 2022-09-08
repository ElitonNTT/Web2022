/* eslint-disable no-unused-expressions */
import React from "react";
import ReactDOM from "react-dom";

//import BomDia from "./componentes/BomDia";
//import Multi, { BoaNoite } from "./componentes/Multiplos";
//const elemento = <h1>React 2</h1>;
//ReactDOM.render(elemento, document.getElementById("root"));
//ReactDOM.render(<h1>React 1</h1>, document.getElementById("root"));

//import Saudacao from "./componentes/Saudacao";
import Pai from "./componentes/Pai";
import Filho from "./componentes/Filho";

ReactDOM.render(
  <>
    <Pai nome="Eliton" sobrenome="Netto">
      {/*Como adicionar os filhos diretamente aqui ? */}
      <Filho nome="Pedro" />
      <Filho nome="Paulo" />
      <Filho nome="Carla" />
    </Pai>
  </>,
  document.getElementById("root")
);
