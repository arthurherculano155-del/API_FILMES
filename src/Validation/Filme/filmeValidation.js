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

export function getFilmesValidation(nome) {

    if (!nome) {
        throw new Error("Informe o nome do filme.");
    }

    if (typeof nome !== "string") {
        throw new Error("O nome do filme deve ser um texto.");
    }

    if (nome.trim() === "") {
        throw new Error("O nome do filme não pode estar vazio.");
    }

    if (nome.length < 2) {
        throw new Error("O nome do filme deve ter pelo menos 2 caracteres.");
    }
}

export function getFilmesIDValidation(resposta, id){
    if(isNaN(id)){
        throw new Error("O ID deve ser um número.")
    }

    if(!resposta){
        throw new Error("Filme não encontrado.")
    }
}