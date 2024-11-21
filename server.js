import express from "express";
import routes from "./src/routes/postRoutes.js";

const app = express();
// interpretar o corpo das requisições como JSON
app.use(express.json());
routes(app);

app.listen(3001, () => {
    console.log("Servidor escutando...");
});