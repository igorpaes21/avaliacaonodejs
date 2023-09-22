const express = require("express");
const router = require("./src/routes/exercicio.js");

const app = express();
const port = 3000;

app.use(express.json());

app.post("/api/", (req, res) => {
  res.json({ message: " I'm here teacher!!! " });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
