import "dotenv/config";

import express from 'express';
import cors from 'cors';

import addRoutes from "./routes.js";

const api = express();
api.use(express.json());
api.use(cors());

addRoutes(api);

const port = process.env.PORT;

api.listen(port, () => {
    console.log(`API rodando na porta ${port}`
)});