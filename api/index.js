import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.send("hola");
})
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`La API funciona en el puerto ${PORT}`);
})