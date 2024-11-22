import multer from "multer";
import { listPosts, newPost, upImg } from "../controllers/postsController.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads" , storage})

const routes = app  => {
    app.get("/posts", listPosts);
    app.post("/posts", newPost);
    app.post("/posts/upload", upload.single("img"), upImg);
}

export default routes;