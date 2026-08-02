import express from 'express';
import livros from './LivroRoutes.js';
import autor from './AutorRoutes.js';

const routes = (app) => {
    app.get('/', (req, res) => res.status(200).send('Hello World!'));
    app.use(express.json(), livros, autor);
};

export default routes;