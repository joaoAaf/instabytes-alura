import express from "express";
import multer from "multer";
import cors from "cors";
import { listPosts, newPost, upImg, updatePost } from "../controllers/postsController.js";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}

const upload = multer({ dest: "./uploads"})

const routes = app  => {
    // interpretar o corpo das requisições como JSON
    app.use(express.json());
    app.use(cors(corsOptions));
    app.get("/posts", listPosts);
    app.post("/posts", newPost);
    app.post("/posts/upload", upload.single("img"), upImg);
    app.put("/posts/:id", updatePost);
}

export default routes;