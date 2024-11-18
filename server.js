import express from "express";

const app = express();

app.listen(3001, () => {
    console.log("Servidor Escutando!");
});

app.get("/", (req, res) => {
    res.status(200).send("Bem Vindo!");
});