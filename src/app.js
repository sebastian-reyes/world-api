import express from "express";
import morgan from "morgan";
import ContinentRoutes from "./routes/continents.routes";
import HomeRoutes from "./routes/home.routes"
import CountrieRoutes from "./routes/countries.routes";

const app = express();

//Settings
app.set("port", 3000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/", HomeRoutes);
app.use("/api/continents", ContinentRoutes);
app.use("/api/countries", CountrieRoutes);

export default app;
