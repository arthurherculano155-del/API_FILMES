import { con } from './connection.js';

export async function salvarFilme(filme){
    let command = `
        insert into filme(nome, sinopse, lancamento, disponivel)
            values(?, ?, ?, ?)
    `

    let [resposta] = await con.query(command, [
        filme.nome,
        filme.sinopse,
        filme.lancamento,
        filme.disponivel
    ]);

    return resposta.insertId;
}

export async function deleteFilme(id){
    let command = `
        delete from filme
        where id = ?
    `
    let [resposta] = await con.query(command, [id]);

    return resposta[0];
}