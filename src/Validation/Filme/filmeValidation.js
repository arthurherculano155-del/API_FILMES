export function salvarFilmeValidation(filme) {
    if (!filme.nome) {
        throw new Error("Nome do filme deve ser registrado")
    }

    if (!filme.sinopse) {
        throw new Error("Sinopse do filme deve ser registrado")
    }

    if (!filme.lancamento) {
        throw new Error("Lancamento do filme deve ser registrado")
    }

    if (filme.disponivel == undefined) {
        throw new Error("Disponivel do filme deve ser registrado")
    }
}

export function deletarFilmeValidation(id){
    if(isNaN(id)){
        throw new Error("O id deve ser um número.")
    }
}