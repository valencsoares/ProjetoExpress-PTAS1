const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
  {id: 1, nome: "Trono de Vidro - A Lâmina Assassina", preco: "64.90", imagem: "/imagem/tog05.jpg", descricao: "Volume 0.5. Implacável. Sedutora. Letal. A Assassina de Adarlan é tudo isso. Em A lâmina da Assassina: Historias de Trono de Vidro conhecemos Celaena, sua fama ultrapassa os muros de Forte da Fenda, mais brilhante que as torres do castelo de vidro, onde o usurpador governa com mão de ferro o destino de todos em Erilea."},
  {id: 2, nome: "Trono de Vidro", preco: "59.90", imagem: "/imagem/tog1.jpg", descricao: "Volume 1. A magia há muito abandonou Adarlan.  Um perverso rei governa, punindo impiedosamente as minorias rebeldes. Mas tudo pode mudar quando uma assassina é chamada para o castelo. Em Trono de vidro, livro que da início a série bestseller com mais de um milhão de cópias vendidas e legiões de fãs no mundo todo, Celaena tem uma perigosa missão que pode lhe garantir sua tão sonhada liberdade ou ser a sua sentença de morte."},
  {id: 3, nome: "Trono de Vidro - Coroa da Meia-Noite", preco: "59.90", imagem: "/imagem/tog2.jpg", descricao: "Volume 2. Antes Celaena era mortal. Mas agora, enquanto segue buscando por sua liberdade, ela é implacável. Trono de vidro: Coroa da meia-noite é o segundo volume da série épica de Sarah J. Maas, repleta de tramas e combates."},
  {id: 4, nome: "Trono de Vidro - Herdeira do Fogo", preco: "32.90", imagem: "/imagem/tog3.jpeg", descricao: "Volume 3. A história de Celaena Sardothien, uma assassina a serviço de um rei tirânico, é uma fantasia épica repleta de ação, intriga e cenas de luta inesquecíveis. No terceiro livro da saga, Herdeira do fogo, Celaena ressurge das cinzas ainda mais forte e letal."},
  {id: 5, nome: "Trono de Vidro - Rainha das Sombras", preco: "69.90", imagem: "/imagem/tog4.jpeg", descricao: "Volume 4. É hora de encontrar a rainha. O aguardado quarto volume da série best-seller mundial Trono de vidro traz de volta em Rainha das sombras, Celaena, a melhor assassina de Adarlan."},
  {id: 6, nome: "Trono de Vidro - Império de Tempestades", preco: "59.90", imagem: "/imagem/tog5t1.jpeg", descricao: "Volume 5 - Tomo 1. A história de Aelin Galathynius, sempre repleta de ação, intriga e cenas de luta inesquecíveis, continua neste quinto e penúltimo volume. Antes de serem traídos pelo atual rei, os Galathynius reinaram em Terrasen por séculos. E agora Aelin deseja recuperar a coroa e voltar a seu trono de direito... Mas o caminho até lá é longo e sinuoso. Amigos serão perdidos, lealdades serão quebradas e alianças inesperadas surgirão. Com a vida e poder jurados ao povo que está determinada a salvar, a antiga assassina, conhecida como Celaena Sardothien, colocará a própria segurança em risco para proteger os seus. Mas a única salvação está numa relíquia enterrada nas ruínas de um velho pântano."},
  {id: 7, nome: "Trono de Vidro - Império de Tempestades", preco: "64.90", imagem: "/imagem/tog5t2.jpg", descricao: "Volume 5 - Tomo 2. A história de Aelin Galathynius, sempre repleta de ação e intrigas, continua nesta segunda parte do quinto livro da série, Império de tempestades.Aelin Galathyius sobreviveu a prisão, à perda de amigos e amores, às traições. Agora deve vencer seu maior medo para salvar o mundo. Com a vida e poder jurados ao povo que está determinada a salvar, a antiga assassina, conhecida como Celaena Sardothien, colocará a própria segurança em risco para proteger os seus. Mais que nunca, Aelin precisa de Rowan, de Dorian e de todos os aliados para conseguir descobrir a localização da relíquia sagrada capaz de banir de seu mundo a ameaça valg e os horrores libertados em Morath. Chegou a hora de levantar os exércitos de Erilea. De cobrar velhas dívidas... É hora de marchar contra o mais supremo dos males. E confiar na pureza de seu coração para trazer a luz."},
  {id: 8, nome: "Trono de Vidro - Torre do Alvorecer", preco: "79.90", imagem: "", descricao: "Volume Extra. Os leitores fiéis da série Trono de Vidro anseiam para saber como a narrativa de Chaol se desenrolaria, que caminho ele seguiria após tudo o que aconteceu. Torre do Alvorecer certamente nos dá isso e muito mais."},
  {id: 9, nome: "Trono de Vidro - Reino de Cinzas", preco: "99.90", imagem: "/imagem/tog6.jpeg", descricao: "Volume 6. Uma princesa que viveria por mil anos. Deveria ser uma dádiva, mas agora é uma maldição. Descubra o aguardado final de Aelin em Reino de Cinzas: a conclusão épica e inesquecível da série Trono de Vidro."},
  {id: 10, nome: "Box Trono de Vidro", preco: "389.90", imagem: "", descricao: "Box com 8 livros da saga Trono de Vidro. O Box Trono de Vidro traz, pela primeira vez, a série fenômeno mundial em um exuberante box rígido e livros com novo projeto gráfico."},
]

function buscarProduto(id) {
  const produto = produtos.find(produto => produto.id == id);
  return produto || null
}

//a próxima linha é um controller, o "/" é uma rota (a ideia do controle e a rota é a mesma)
app.get('/', (req, res) => {
  res.render('index'); //render: torna visual, como ele joga para o usuário, usa-se a resposta
});

app.get('/contatos', (req, res) => {
  res.render('contatos', { message: 'Página de contatos!' });
});

app.get('/produto', (req, res) => {
  res.render('produto', { message: 'Página do produto!' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});