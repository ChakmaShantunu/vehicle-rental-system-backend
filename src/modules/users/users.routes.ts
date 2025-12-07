import { Router } from "express";
import { usersController } from "./users.controller";

const router = Router();

router.post("/", usersController.createUser);

router.get("/", usersController.getUser);

router.put("/:id", usersController.updateSingleUser);

router.delete("/:id", usersController.deleteSingleUser);

export const usersRoutes = router;