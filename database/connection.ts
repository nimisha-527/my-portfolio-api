import dotenv from "dotenv";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";

dotenv.config();

const dbUrl = process.env.DB_URL || "mongodb://localhost:27017/portfolio";

export const startServer = async() => {
    try {
        await mongoose.connect(dbUrl);
        console.log("Mongo connection established..")
    } catch (err) {
        console.error(err);
        console.log("Error in establishing Mongo connection");
    }
};

export const store = MongoStore.create({
    mongoUrl: dbUrl,
    ttl: 24 * 60 * 60
});