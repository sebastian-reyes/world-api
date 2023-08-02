import { Router } from "express";
import { methods as CountrieController} from "../controllers/countries.controller";

const router = Router();

router.get("/", CountrieController.getCountries);
router.get("/:id", CountrieController.getCountrie)

export default router;
