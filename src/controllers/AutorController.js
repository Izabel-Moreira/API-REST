import {autor} from '../models/Autor.js';

class AutorController {
 
    static async listarAutores(req, res) {
        try{
        const listaAutor = await autor.find();
        res.status(200).json(listaAutor);
        }catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao listar os autores!` });
        } 
    };

    static async listarAutorPorId(req, res) {
        try{
        const id = req.params.id
        const AutorEncontrado = await autor.findById(id);
        res.status(200).json(AutorEncontrado);
        }catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao listar o autor!` });
        } 
    };
    
    static async cadastrarAutor(req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({ message: 'Autor cadastrado com sucesso!', autor: novoAutor });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao cadastrar o autor!` });
        }
    };

     static async atualizarAutor(req, res) {
        try{
        const id = req.params.id
        await autor.findByIdAndUpdate(id, req.body);
        res.status(200).json({message: "Autor atualizado com sucesso!"});
        }catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao atualizar o autor!` });
        } 
    };

    static async deletarAutor(req, res) {
        try{
        const id = req.params.id
        await autor.findByIdAndDelete(id);
        res.status(200).json({message: "Autor deletado com sucesso!"});
        }catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao deletar o autor!` });
        } 
    };
}
export default AutorController;