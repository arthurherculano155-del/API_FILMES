import * as DBFilmes from '../Repository/filmeRepository.js'
import { Router } from 'express';
let endpoints = Router();

endpoints.post('/filmes/postar', async (req, resp) => {
    let filme = req.body;

    let id = await DBFilmes.salvarFilme(filme);
    
    resp.send({id});
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