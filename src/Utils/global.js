global.dateTime = function dateTime(){
    let agora = new Date();

    let hoje = `${agora.toLocaleDateString()} ${agora.toLocaleTimeString()}`

    return hoje;
}