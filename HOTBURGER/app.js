const express = require('express');
const app = express();
const port = 3000;

// Definindo o diretório de views
app.set('views', './views');
app.set('view engine', 'ejs');

// Definindo uma rota para a página inicial
app.get('/', (req, res) => {
    res.render('index');  // Isso vai renderizar o arquivo "index.ejs" na pasta views
});

// Caso você tenha uma página de signup
app.get('/signup', (req, res) => {
    res.render('signup');  // Isso vai renderizar o arquivo "signup.ejs" na pasta views
});

// Inicializando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
