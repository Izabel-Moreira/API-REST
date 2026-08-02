import express from 'express';
import conectaDatabase from './config/dbConnect.js';
import routes from './routes/index.js';

///////////////////////////////
// Conexão com o banco de dados
const conexao = await conectaDatabase();

////////////////////////////////////////////////////
// Configuração do servidor
const app = express();
routes(app);

export default app;