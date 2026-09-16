import { Router } from "express";
const endpoint = Router();

endpoint.get('/health', (req, resp) => {
    resp.send({
        resposta: "API funcionando"
    });
})

export default endpoint;