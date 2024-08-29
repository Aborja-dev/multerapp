import mongoose from "mongoose";
const urlConnection = "mongodb+srv:/admin2024:admin@mongocluster.xqmij.mongodb.net/?retryWrites=true&w=majority&appName=MongoCluster";

export function connectDB() {
    return mongoose.connect(urlConnection)
        .then(() => {
            console.log("Database connected");
        })
        .catch(err => {
            console.log(err);
        })
}

export const mongoClient = async () => {
    const mongoose = await mongoose.connect(urlConnection);
    return mongoose
}