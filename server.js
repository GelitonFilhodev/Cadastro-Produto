const express = require("express");
const database = require("./config/database")
const routes = require("./routes/produtoRoute")
const cors = require("cors")

const app = express();

app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});