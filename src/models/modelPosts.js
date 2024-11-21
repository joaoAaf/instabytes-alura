import connectDB from "../config/db.js";

const connection = await connectDB(process.env.STRING_CONNECTION);

export default async function getAllPosts() {
    const db = connection.db("instabytes");
    const collection = db.collection("posts");
    return collection.find().toArray();
};