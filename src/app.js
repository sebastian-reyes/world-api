import express from "express";
import morgan from "morgan";
import ContinentRoutes from "./routes/continents.routes";

const app = express();

//Settings
app.set("port", 3000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/continents", ContinentRoutes)

export default app;
