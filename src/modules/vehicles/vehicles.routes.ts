import { Router } from "express";
import { vehiclesController } from "./vehicles.controller";
import auth from "../../middleware/auth";
import authorize from "../../middleware/authorize";

const router = Router();

router.post("/", authorize(["admin"]), vehiclesController.createVehicle);

router.get("/", vehiclesController.getVehicle);

router.get("/:id", vehiclesController.getSingleVehicle);

router.put("/:id", authorize(["admin"]), vehiclesController.updateSingleVehicle);

router.delete("/:id", authorize(["admin"]), vehiclesController.deleteSingleVehicle);

export const vehiclesRoutes = router;