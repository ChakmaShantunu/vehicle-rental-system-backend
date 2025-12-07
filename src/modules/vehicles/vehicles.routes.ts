import { Router } from "express";
import { vehiclesController } from "./vehicles.controller";

const router = Router();

router.post("/", vehiclesController.createVehicle);

router.get("/", vehiclesController.getVehicle);

router.get("/:id", vehiclesController.getSingleVehicle);

router.put("/:id", vehiclesController.updateSingleVehicle);

router.delete("/:id", vehiclesController.deleteSingleVehicle);

export const vehiclesRoutes = router;