// import express from 'express';

// const app = express();
// app.listen(3000, () => { // O número 3000 é a porta onde o app(express/servidor) irá ficar escutando (pegando informação), a porta 3000 é comum usada para servidor local 
//     console.log("Servidor escutando.");
// });

// app.get("/api", (req, res) => { // O ( => ) Se chama Arrow Function
//     res.status(200).send("Boas vindas à imersão!"); 
// }); 



// É um bom padrão deixar uma linha extra vazia, nesse caso seria o 12
// Para derrubar o servidor e começar novamente no terminal é só da CRTL + C

//-------------------------Aula 2 ------------------------------------------------------

// Site para ver os status de comunicação HTTP. É só colocar ( http.cat ) no navegador

// import express from 'express';

// //Array é uma estrutura que contem vários dados de uma vez só/ em um lugar só
// const posts = [
//     {
//         id: 1,
//         Descrição: "Uma foto teste.",
//         Imagem: "https://placecats.com/millie/300/150" 
//     },
//     {
//         id: 2,
//         Descrição: "Um gato adorável relaxando.",
//         Imagem: "https://placecats.com/bella/300/150"
//     },
//     {
//         id: 3,
//         Descrição: "Gatinho brincalhão no jardim.",
//         Imagem: "https://placecats.com/millie/300/150"
//     },
//     {
//         id: 4,
//         Descrição: "Gato listrado explorando.",
//         Imagem: "https://placecats.com/millie/300/150"
//     },
//     {
//         id: 5,
//         Descrição: "Gato de olhos azuis descansando.",
//         Imagem: "https://placecats.com/millie/300/150"
//     },
//     {
//         id: 6,
//         Descrição: "Gatinho curioso olhando para a câmera.",
//         Imagem: "https://placecats.com/millie/300/150"
//     }
// ];

// const app = express();
// app.use(express.json()); // faz com que o servidor converta os dados em json

// app.listen(3000, () => { // O número 3000 é a porta onde o app(express/servidor) irá ficar escutando (pegando informação), a porta 3000 é comum usada para servidor local 
//     console.log("Servidor escutando.");
// });

// app.get("/posts", (req, res) => { 
//     res.status(200).json(posts); // ficou agora o .json que faz a conversão do string em json
// });

// function buscarPostsporID(id) { // O findIndex faz com que o javascript ache algum dado pelo seu indice
//     return posts.findIndex((post) => {
//         return post.id === Number(id)
//     })  
// }

// app.get("/posts/:id", (req, res) => { // O : siginifca que a gente diz ao express que essa informação é de um dado variavel
//     const index = buscarPostsporID(req.params.id)
//     res.status(200).json(posts[index]); // ficou agora o .json que faz a conversão do string em json
// }); 

// Use node --watch server.js para iniciar o servidor (o --watch faz com que o servidor reinicie sempre que a gente salva)

//-------------------------Aula 2 ------------------------------------------------------

// console.log(process.env.STRING_CONEXAO)
// Para testar o servidor com o script DEV ou outro criado é só da: npm run dev (ou outro em vez de dev)

// import express from 'express';
// import routes from './src/routes/postsRoutes.js';
// import conectarAoBanco from './src/config/dbConfig';

// const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

// async function getTodosPosts() {
//     const db = conexao.db("Imersão-backand");
//     const colecao = db.collection("posts"); // O collection abre a coleção especifica do banco de dados, no nosso caso o posts
//     return colecao.find().toArray(); // Faz com que a informação retorne convertido em um Array
// }

// const app = express();
// routes(app)
// app.use(express.json());

// app.listen(3000, () => { 
//     console.log("Servidor escutando.");
// });

// app.get("/posts", async (req, res) => {
//     const posts = await getTodosPosts() // Quando colocado o await ele precisa do async, nesse caso foi no req e res. 
// // O async do funct getTodosPosts() apareceu provaelmente por conta do await na const conexao.
//     res.status(200).json(posts); 
// });

//------------------------- Aula 3 ------------------------------------------------------

import express from 'express';
import routes from './src/routes/postsRoutes.js';

const app = express();
routes(app)

app.listen(3000, () => { 
    console.log("Servidor escutando.");
});

//------------------------- Aula 4 ------------------------------------------------------

//Foi instalado o thunder client
//Foi instalado o Multer. Ele cuida da parte de gerenciamento de arquivos e pastas
//Foi baixado o Postman

//------------------------- Aula 4 ------------------------------------------------------

app.use(express.static("uploads")); // Esse comando faz com que a pasta uploads fique disponivel para qualquer pessoa acessar. Isso se chama: 
//Servir Arquivo Estático então o express entende que nessa pasta iremos "servir" os arquivos que estão dentro dela para quem requisitar

//Foi criado uma pasta services para colocar o serviço do gemini
//Foi instalado o icors 
//Para instalar as dependencias da parte do front, é só da "npm i" na pasta do front