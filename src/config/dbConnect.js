import mongoose from 'mongoose';

async function conectaDatabase() {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_STRING);
        console.log("conexão com o banco feita com sucesso");
        return mongoose.connection;
    } catch (erro) {
        console.error("erro ao conectar ao banco", erro);
        throw erro;
    }
}

export default conectaDatabase;