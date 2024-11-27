import express from "express";
import multer from "multer";
import cors from "cors";
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controller/postsController.js";

const corsOption = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200  
}

const storage = multer.diskStorage({ // Foi disponibilizado esse código padrão para configurar o multer para salvar os arquivos com o nome certo no Windows
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads" , storage}) // No Windows a gente precisa criar a pasta manualmente, se fosse linux ou mac não precisaria.

const routes = (app) => { // export default só exporta uma coisa e na hora de importar não necessita ter o mesmo nome de variavel/etc
    app.use(express.json());
    app.use(cors(corsOption))
    app.get("/posts", listarPosts);

    app.post("/posts", postarNovoPost);
    app.post("/upload", upload.single("Imagem"), uploadImagem)

    app.put("/upload/:id", atualizarNovoPost)
};

export default routes;

// Verbos HTTP são ações basicas que todo sistema faz. Os principais Verbos HTTP são: Criar(Post), Ler(Get), Deletar(Delete), Atualizar(Put).