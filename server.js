import express from "express";

const posts = [
    {
        id: 1,
        descricao: "Uma foto qualquer",
        imagem: "https://placecats.com/millie/300/150"
      },
      {
        id: 2,
        descricao: "Gato fofo dormindo",
        imagem: "https://placecats.com/millie/300/150"
      },
      {
        id: 3,
        descricao: "Gatinho brincando com um novelo de lã",
        imagem: "https://placecats.com/millie/300/150"
      },
      {
        id: 3,
        descricao: "Olhos de gato brilhando no escuro",
        imagem: "https://placecats.com/millie/300/150"
      },
      {
        id: 4,
        descricao: "Gato curioso olhando pela janela",
        imagem: "https://placecats.com/millie/300/150"
      },
      {
        id: 5,
        descricao: "Gato ronronando no colo",
        imagem: "https://placecats.com/millie/300/150"
      }
]

const app = express();
// Serve para o express retornar um json nas requisições
app.use(express.json());

app.listen(3001, () => {
    console.log("Servidor Escutando!");
});

app.get("/posts", (req, res) => {
    res.status(200).send(posts);
});

app.get("/posts/:id", (req, res) => {
    const index = getPostId(req.params.id);
    res.status(200).send(posts[index]);
});

function getPostId(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
};