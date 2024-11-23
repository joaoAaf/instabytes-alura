import fs from "fs";
import { getAllPosts, createPost, editPost } from "../models/modelPosts.js";
import gerarDescricaoComGemini from "../services/geminiService.js";

export async function listPosts (req, res) {
    const posts = await getAllPosts();
    res.status(200).json(posts);
}

export async function newPost (req, res) {
    const post = req.body;
    try {
        const createdPost = await createPost(post);
        res.status(201).json(createdPost);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Erro ao criar post" });
    };
};

export async function upImg (req, res) {
    const post = {
        description: "",
        imgUrl: req.file.originalname,
        alt: ""
    };
    try {
        const createdPost = await createPost(post);
        const renamedImg = `uploads/${createdPost.insertedId}.jpeg`;
        fs.renameSync(req.file.path, renamedImg);
        res.status(201).json(createdPost);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Erro ao criar post" });
    };
};

export async function updatePost (req, res) {
    const id  = req.params.id;
    const urlImg = `http://localhost:3001/${id}.jpeg`;
    try {
        const imageBuffer = fs.readFileSync(`uploads/${id}.jpeg`);
        const description = await gerarDescricaoComGemini(imageBuffer);
        const post = {
            imgUrl: urlImg,
            description: description,
            alt: req.body.alt
        };
        const editedPost = await editPost(id, post);
        res.status(201).json(editedPost);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Erro ao criar post" });
    };
};