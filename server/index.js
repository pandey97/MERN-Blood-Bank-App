import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";
import cors from "cors";
import testRouter from "./routes/test.route.js";
import authRouter from "./routes/auth.route.js";
import connectDB from "./config/db.js";

dotenv.config(); // if .env file is not in root folder then we have to do something like this dotenv.config({path:'./config/'});

connectDB();

const app = express(); //All the functionality of express is now store in app variable

app.use(express.json());
app.use(cors());
app.use(morgan("dev")); //Morgan is used to hit the url on console if we hit api

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`.bgBlue.white);
});

app.use("/api", testRouter);
app.use("/api", authRouter);
