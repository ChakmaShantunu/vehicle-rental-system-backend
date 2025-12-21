import { Router } from "express";
import { bookingsController } from "./bookings.controller";
import auth from "../../middleware/auth";

const router = Router();

router.post("/", auth, bookingsController.createBooking);
router.get("/", auth, bookingsController.getBookings);
router.put("/:id", auth, bookingsController.updateBooking);
export const bookingsRoutes = router;