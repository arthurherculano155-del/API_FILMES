import "dotenv/config";
import express from 'express';
import cors from 'cors';
import multer from "multer";

const api = express();
api.use(express.json());
api.use(cors());
api.use(multer);

const port = process.env.PORT;

api.listen(port, () => {
    console.log(`API rodando na porta ${port}`
)});