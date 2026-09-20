import * as DBFilmes from '../../Repository/filmeRepository.js'

export async function salvarFilmeService(filme){
    let id = await DBFilmes.salvarFilme(filme);

    return id;
}

export async function deletarFilmeService(id){
    let resposta = await DBFilmes.deleteFilme(id)

    return resposta;
}