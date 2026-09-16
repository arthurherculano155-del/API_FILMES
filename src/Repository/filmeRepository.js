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