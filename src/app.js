import express from 'express';
import conectaDatabase from './config/dbConnect.js';
import livro from './models/Livro.js';

///////////////////////////////
// Conexão com o banco de dados
const conexao = await conectaDatabase();

////////////////////////////////////////////////////
// Configuração do servidor
const app = express();
app.use(express.json());

////////////////////////
// Rotas
app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});

app.get('/livros', async (req, res) => {
   const listaLivros = await livro.find();
   res.status(200).json(listaLivros);
});

/*
app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('Livro adicionado com sucesso!');
}   );  

app.get('/livros/:id', (req, res) => {
    const index = buscalivro(req.params.id);
    res.status(200).json(livros[index]);
});

app.put('/livros/:id', (req, res) => {
    const index = buscalivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
});

app.delete('/livros/:id', (req, res) => {
    const index = buscalivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro removido com sucesso!");
});

*/
export default app;