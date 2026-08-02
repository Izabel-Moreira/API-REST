import livro from '../models/Livro.js';
import {autor} from '../models/Autor.js';

class LivroController {
 
    static async listarLivros(req, res) {
        try{
        const listaLivros = await livro.find();
        res.status(200).json(listaLivros);
        }catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao listar os livros!` });
        } 
    };

    static async listarLivrosPorId(req, res) {
        try{
        const id = req.params.id
        const LivroEncontrado = await livro.findById(id);
        res.status(200).json(LivroEncontrado);
        }catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao listar o livro!` });
        } 
    };
    
    static async cadastrarLivro(req, res) {
      const novoLivro = req.body;
        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const LivroCompleto = { ...novoLivro, autor: {...autorEncontrado._doc} };
            const LivroCriado= await livro.create(LivroCompleto);
            res.status(201).json({ message: 'Livro cadastrado com sucesso!', livro: novoLivro });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao cadastrar o livro!` });
        }
    };

     static async atualizarLivro(req, res) {
        try{
        const id = req.params.id
        await livro.findByIdAndUpdate(id, req.body);
        res.status(200).json({message: "Livro atualizado com sucesso!"});
        }catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao atualizar o livro!` });
        } 
    };

    static async deletarLivro(req, res) {
        try{
        const id = req.params.id
        await livro.findByIdAndDelete(id);
        res.status(200).json({message: "Livro deletado com sucesso!"});
        }catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao deletar o livro!` });
        } 
    };

    static async listarLivrosporEditor (req, res) {

        const editora = req.query.editora;
        try{
            const livrosPorEditora= await livro.find({editora: editora})
            res.status(200).json(livrosPorEditora);
        }catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao listar os livros da editora!` });
        }
    };

}
export default LivroController;