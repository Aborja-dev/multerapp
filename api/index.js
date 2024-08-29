import express from "express";
import cors from "cors";
import { upload } from "./util/uplaod.js";

const app = express();
app.use(cors());
app.use(express.json());
app.get("/users", (req, res) => {
    res.json({ ok: true });
})
app.post("/create-users",upload.fields([{name: 'image', maxCount: 1}]) ,(req, res) => {
    res.json({ ok: true });
})
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`La API funciona en el puerto ${PORT}`);
})