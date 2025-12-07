import { Request, Response } from "express";
import { bookingsService } from "./bookings.service";

const createBooking = async (req: Request, res: Response) => {
    try {
        const booking = await bookingsService.createBooking(req.body);
        res.status(201).json({
            success: true,
            message: "Bookings created Successfully",
            data: booking
        })
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

export const bookingsController = {
    createBooking
}