import { Router } from "express";
import { bookingsController } from "./bookings.controller";

const router = Router();

router.post("/", bookingsController.createBooking);
router.get("/", bookingsController.getBookings);
router.put("/:id", bookingsController.updateBooking);
export const bookingsRoutes = router;