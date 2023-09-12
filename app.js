const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

//a próxima linha é um controller, o "/" é uma rota (a ideia do controle e a rota é a mesma)
app.get('/', (req, res) => {
  res.render('index', { message: 'Olá, Mundo!' }); //render: torna visual, como ele joga para o usuário, usa-se a resposta
});

app.get('/contatos', (req, res) => {
  res.render('contatos', { message: 'Página de contatos!' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});