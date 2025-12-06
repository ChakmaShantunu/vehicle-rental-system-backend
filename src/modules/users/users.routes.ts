import { Router } from "express";
import { usersController } from "./users.controller";

const router = Router();

router.post("/", usersController.createUser);

router.get("/", usersController.getUser);

router.put("/:id", usersController.updateSingleUser);

export const usersRoutes = router;