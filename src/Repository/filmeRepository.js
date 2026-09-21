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
    let [resposta] = await con.query(command, id);

    return resposta[0];
}

export async function getFilme(nome){
    let command = `
        select id, nome, lancamento, disponivel from filme
        where nome like ?
    `

    let resposta = await con.query(command, [`%${nome}%`])

    return resposta[0];
}

export async function getFilmeID(id){
    let command = `
        select * from filme
        where id = ?
    `

    let resposta = await con.query(command, [id]);

    return resposta[0];
}