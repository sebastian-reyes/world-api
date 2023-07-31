import express from "express";
import morgan from "morgan";

const app = express();

//Settings
app.set("port", 3000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());

export default app;
