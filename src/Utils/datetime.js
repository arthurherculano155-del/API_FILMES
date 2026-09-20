global.Agora = function Agora(){
    let agora = new Date();

    let hoje = agora.toLocaleDateString();
    let hora = agora.toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit"
    })

    let atual = hoje + " " + hora

    return atual;
}