import { Router } from "express";
import { bookingsController } from "./bookings.controller";

const router = Router();

router.post("/", bookingsController.createBooking);
router.get("/", bookingsController.getBookings);
export const bookingsRoutes = router;