import express from "express";
import router from "./routes/users.js";
import { connectdb } from "./data/dbConnnect.js";
import dotenv from "dotenv";

dotenv.config({
    path:"./data/.env"
})

export const app = express();
connectdb()

// router Configuration
app.use("/users",router)

// Setup and middlewares
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // since the form data is in json format , express.json middleware is used



