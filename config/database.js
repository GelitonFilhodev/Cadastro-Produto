const mysql = require("mysql2/promise")

const conexao = mysql.createPool({
    host: "localhost",
    user: "geliton",
    password: "1234",
    database: "loja"
})

module.exports = conexao