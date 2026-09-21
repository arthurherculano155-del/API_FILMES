import { Router } from 'express';
import { deletarFilmeService, getFilmes, getFilmesIDService, salvarFilmeService } from '../Service/Filme/filme.js';
import { deletarFilmeValidation, getFilmesValidation, salvarFilmeValidation, getFilmesIDValidation } from '../Validation/Filme/filmeValidation.js';
let endpoints = Router();


endpoints.post('/filme/postar', async (req, resp) => {
    let filme = req.body;

    try {
        let id = await salvarFilmeService(filme)

        resp.send({ id });
    }
    catch (err) {
        resp.status(400).send({
            erro: salvarFilmeValidation(filme)
        })
    }
});

endpoints.delete('/filme/deletar/:id', async (req, resp) => {
    let id = req.params.id

    try {
        let response = await deletarFilmeService(id)

        resp.send({
            resposta: `Filme com id ${id} foi deletado!`
        })
    }
    catch (err) {
        resp.status(400).send({
            erro: deletarFilmeValidation(id)
        })
    }
})

endpoints.get("/filme/listar", async (req, resp) => {
    let nome = req.query.nome;

    try {
        let response = await getFilmes(nome);
        getFilmesValidation(nome, response);

        resp.send(response);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get("/filme/listar/:id", async (req, resp) => {
    let id = req.params.id;


    try {
    let resposta = await getFilmesIDService(id);
    let erros = getFilmesIDValidation(resposta, id)

    resp.send(resposta)
    } catch (err) {
        resp.status(400).send({
           erro: err.message
        })
    }
})

export default endpoints;