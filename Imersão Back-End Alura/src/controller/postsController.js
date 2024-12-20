import {getTodosPosts, criarPost, atualizarPost } from "../models/postsModel.js";
import fs from "fs";
import gerarDescricaoComGemini from "../services/geminiService.js";

export async function listarPosts(req, res) {
    const posts = await getTodosPosts();
    res.status(200).json(posts); 
} 

export async function postarNovoPost(req, res) {
    const novoPost = req.body; // o body é a parte onde fica o conteudo da requisição, já que o cabeçalio é onde ficam as informações e o corpo é o conteudo.
    // aqui diz para o js tentar realizar algo
    try { 
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado);
    } catch(erro) {
        console.error(error.message);
        res.status(500).json({"Error":"Falha na requesição"});
    }
}

export async function uploadImagem(req, res) {
    const novoPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: "",
    };

    try { 
        const postCriado = await criarPost(novoPost);
        const imgAtualizada = `uploads/${postCriado.insertedId}.png`
        fs.renameSync(req.file.path, imgAtualizada) // O fs é file system é um sistema de gerenciamento de arquivos nativa do node
        res.status(200).json(postCriado);
    } catch(erro) {
        console.error(error.message);
        res.status(500).json({"Error":"Falha na requesição"});
    }
}

export async function atualizarNovoPost(req, res) {
    const id = req.params.id;
    const urlImagem = `http://localhost:3000/${id}.png`;
    
    try {
        const imgBuffer = fs.readFileSync(`uploads/${id}.png`);
        const  descricao = await gerarDescricaoComGemini(imgBuffer)
        
        const post = {
            imgUrl: urlImagem,
            descricao: descricao,
            alt: req.body.alt
    
        }
        
        const postCriado = await atualizarPost(id, post);
        res.status(200).json(postCriado);
    } catch(erro) {
        console.error(error.message);
        res.status(500).json({"Error":"Falha na requesição"});
    }
}