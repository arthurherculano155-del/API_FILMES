import { Router } from 'express';
import { deletarFilmeService, salvarFilmeService } from '../Service/Filme/filme.js';
import { deletarFilmeValidation, salvarFilmeValidation } from '../Validation/Filme/filmeValidation.js';
let endpoints = Router();

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

})

export default endpoints;