const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send(`<h1>Seja bem vindo!</h1> <br> <a href="http://localhost:${port}/introducao">Entrar</a>`);
});

//-----/Rota Introdução/-----//
app.get('/introducao', (req, res) => {
    res.send(`<h2>Introdução ao Express</h2> <br> <a href="http://localhost:${port}">Voltar</a> <br> <a href="http://localhost:${port}/transfere">Transfere</a> <br> <a href="http://localhost:${port}/livros">Livros</a>`);
});

//-----/Objeto JSON/-----//
app.use(express.json());
app.post('/filmes', (req, res) => {
    const { titulo, genero } = req.body;
    res.send(`Filme:${titulo} - Gênero: ${genero}, recebido...`)
});

//-----/Monitorar Rota/-----//
const log = (req, res, next) => {
    console.log(`................. Acessado em ${new Date()}`);
    next();
}

//-----/Rota Transfere/-----//
app.get('/transfere', log, (req, res) => {
    res.send(`Ok! Valor transferido com sucesso... <br> <a href="http://localhost:${port}/introducao">Voltar</a>`);
});

//-----/Rota Livros/-----//
const livros = require('./livros');
app.use('/livros', livros)

//-----/Server/-----//
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});