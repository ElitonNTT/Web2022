const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const saudacao = require("./saudacaomid");
const usuarioApi = require("./api/usuario");

require("./api/produto")(app, "com param!");

app.post("/usuario", usuarioApi.salvar);
app.get("/usuario", usuarioApi.obter);

app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(saudacao("Netto"));

//chain of responsability

// terceiro parametro, next usado para passar para proxima funcao, sem ele neste caso, a proxima res da url/json nao seria resolvida nunca
app.use("/json", (req, res, next) => {
  console.log("antes");
  next();
});
app.get("/clientes/relatorio", (req, res) => {
  res.send(
    `Cliente relatorio: Completo! ${req.query.completo} ano = ${req.query.ano}`
  );
});

app.post("/corpo", (req, res) => {
  // res.send(req.body);
  res.send(JSON.stringify(req.body));
  //bodyParser inutiliza este codigo
  // let corpo = "";
  // req.on("data", function (parte) {
  //   corpo += parte;
  // });
  // req.on("end", function () {
  //   res.send(corpo);
  // });
});

app.get("/clientes/:id", (req, res) => {
  res.send(`Cliente ${req.params.id} selecionado!`);
});

//neste caso, essa sera a resposta para qualquer url.
app.get("/json", (req, res, next) => {
  // res.send("Estou <b>vivinhho<b/>");

  // res.json({
  //   name: "iPad 64GB",
  //   price: "6999.99",
  //   discount: "0.12",
  // });
  console.log("durante");
  res.json({
    data: [
      { id: 1, name: "Ana", position: 1 },
      { id: 2, name: "Maria", position: 2 },
      { id: 3, name: "Carlos", position: 3 },
    ],
    count: 30,
    skip: 0,
    limit: 3,
    status: 200,
  });
  next();
});

app.use("/json", (req, res, next) => {
  console.log("depois");
  next();
});

//neste caso, a resposta sera somente na url inicio
// app.use("/inicio", (req, res) => {
//   res.send("Estou <b>na tela de INICIO<b/>");
// });

app.listen(3000, () => {
  console.log("BackEnd Funcionando!");
});
