import { Router } from 'express';
import { deletarFilmeService, salvarFilmeService } from '../Service/Filme/filme.js';
import { deletarFilmeValidation, salvarFilmeValidation } from '../Validation/Filme/filmeValidation.js';
let endpoints = Router();

<<<<<<< HEAD
endpoints.post('/filme/postar', async (req, resp) => {
    try {
        let filme = req.body;
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
=======
endpoints.post('/filmes/postar', async (req, resp) => {
    let filme = req.body;
>>>>>>> ed1ca2a47658b766dd2860ab7c305975197df7ad

})

endpoints.get('/filmes/listar', async (req, resp) => {
    let lista = await DBFilmes.listarFilmes();

    resp.send({
        lista: lista
    });
})

endpoints.delete('/filmes/deletar/:id', async (req, resp) => {
    let id = req.params.id;

    let resposta = await DBFilmes.deleteFilme(id);

    resp.send({
        resposta: resposta
    });
})

export default endpoints;