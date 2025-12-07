import { Router } from "express";
import { bookingsController } from "./bookings.controller";

const router = Router();

router.post("/", bookingsController.createBooking);
export const bookingsRoutes = router;