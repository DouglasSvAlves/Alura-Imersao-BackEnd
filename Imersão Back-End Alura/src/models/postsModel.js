import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

export async function getTodosPosts() { // Foi tirado o export default pq agora temos 2.
    const db = conexao.db("Imersão-backand");
    const colecao = db.collection("posts");
    return colecao.find().toArray(); 
}

export async function criarPost(novoPost) {
    const db = conexao.db("Imersão-backand");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost); // Essa função insertOne foi pega da documentação do mongoDB ela quem define as funções do seu serviço
}

export async function atualizarPost(id, novoPost) {
    const db = conexao.db("Imersão-backand");
    const colecao = db.collection("posts");
    const objID = ObjectId.createFromHexString(id);
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost});
}