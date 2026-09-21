import * as DBFilmes from '../../Repository/filmeRepository.js'

export async function salvarFilmeService(filme){
    let id = await DBFilmes.salvarFilme(filme);

    return id;
}

export async function deletarFilmeService(id){
    let resposta = await DBFilmes.deleteFilme(id)

    return resposta;
}

export async function getFilmes(nome){
    let response = await DBFilmes.getFilme(nome);

    return response;
}

export async function getFilmesIDService(id){
    let resposta = await DBFilmes.getFilmeID(id);


    return resposta[0];
}