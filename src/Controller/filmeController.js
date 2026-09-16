import * as DBFilmes from '../Repository/filmeRepository.js'
import { Router } from 'express';
let endpoints = Router();

endpoints.post('/filme/postar', async (req, resp) => {
    let filme = req.body;

    let id = await DBFilmes.salvarFilme(filme);
    
    resp.send({id});
})

export default endpoints;