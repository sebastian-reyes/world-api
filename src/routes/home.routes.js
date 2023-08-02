import { Router } from "express";
import { methods as HomeController} from "../controllers/home.controller"

const router = Router();

router.get("/api", HomeController.getHome);

export default router;