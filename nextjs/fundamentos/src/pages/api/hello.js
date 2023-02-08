// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    nome: "Teste API",
    metodo: req.method,
    name: req.query.name,
    idade: +req.query.idade,
  });
}
