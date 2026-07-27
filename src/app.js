import express from 'express';

const  app = express(); 
app.use(express.json());

const livros = [
    {
        id: 1,  
        titulo: "Livro 1"
    },

    {
        id:2,
        titulo: "Livro 2"
    }
];

function buscalivro(id) {
    return livros.findIndex
    (livro => livro.id === Number(id));

}

app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});

app.get('/livros', (req, res) => {
    res.status(200).json(livros);
});

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

export default app;