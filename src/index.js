
import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./env",
});

connectDB()
/*const app = express()
    (async () => {
        try {
            await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
            app.on("error", (error) => {
                console.log("Facing DB Error with express", error);
                throw error;
            });
            app.listen(process.env.PORT, () => {
                console.log('App is listening');
            });
        } catch (error) {
            console.log("Facing DB Error", error);
            throw error;
        }
    })();
    */
