import { listPosts } from "../controllers/postsController.js";

const routes = app  => {
    app.get("/posts", listPosts);
}

export default routes;