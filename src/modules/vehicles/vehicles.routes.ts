import { Router } from "express";
import { vehiclesController } from "./vehicles.controller";
import auth from "../../middleware/auth";

const router = Router();

router.post("/", auth, vehiclesController.createVehicle);

router.get("/", vehiclesController.getVehicle);

router.get("/:id", vehiclesController.getSingleVehicle);

router.put("/:id", vehiclesController.updateSingleVehicle);

router.delete("/:id", auth, vehiclesController.deleteSingleVehicle);

export const vehiclesRoutes = router;