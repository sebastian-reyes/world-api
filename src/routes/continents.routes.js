import { Router } from "express";
import { methods as ContinentController } from "../controllers/continents.controller";
const router = Router();

router.get("/", ContinentController.getContinents);
router.get("/:id", ContinentController.getContinent);

export default router;
