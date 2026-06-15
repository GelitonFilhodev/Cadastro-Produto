const ProdutoModel = require("../model/produtoModel")

async function listar(req, res) {
    try {
        const produtos = await ProdutoModel.listar()
        res.json(produtos)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            erro: error.message
        })
    }
}

async function cadastrar(req, res) {
    const { nome, preco } = req.body
    try {
        await ProdutoModel.cadastrar(nome, preco)
        res.status(201).json({
            mensagem: "Produto cadastrado!"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            erro: error.message
        })
    }
}

module.exports = {
    cadastrar,
    listar
}