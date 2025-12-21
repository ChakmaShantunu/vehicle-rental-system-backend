import { Router } from "express";
import { usersController } from "./users.controller";
import auth from "../../middleware/auth";
import authorize from "../../middleware/authorize";

const router = Router();

router.get("/", auth, authorize(["admin"]), usersController.getUser);

router.put("/:id", auth, usersController.updateSingleUser);

router.delete("/:id", auth, authorize(["admin"]), usersController.deleteSingleUser);

export const usersRoutes = router;