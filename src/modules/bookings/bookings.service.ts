import { error } from "console";
import { pool } from "../../config/db"

const createBooking = async (payload: Record<string, unknown>) => {

    const { customer_id, vehicle_id, rent_start_date, rent_end_date } = payload;

    const vehicleResult = await pool.query(`SELECT * FROM vehicles WHERE id=$1`, [vehicle_id]);
    if (vehicleResult.rows.length === 0) {
        throw new Error("Vehicle not found")
    }

    const vehicle = vehicleResult.rows[0]

    const number_of_days = Math.ceil((new Date(rent_end_date as string).getTime() - new Date(rent_start_date as string).getTime()) / (1000 * 60 * 60 * 24) + 1);
    const total_price = number_of_days * vehicle.daily_rent_price



    const result = await pool.query(`INSERT INTO bookings(customer_id, vehicle_id, rent_start_date, rent_end_date, total_price, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`, [customer_id, vehicle_id, rent_start_date, rent_end_date, total_price, "active"]);

    const booking = result.rows[0];

    booking.vehicle = {
        vehicle_name: vehicle.vehicle_name,
        daily_rent_price: vehicle.daily_rent_price
    }
    return booking;
};

const getBookings = async () => {

    const bookingResult = await pool.query(`SELECT * FROM bookings ORDER BY id DESC`);
    const bookings = bookingResult.rows

    const enrichedBookings = []

    for (const booking of bookings) {
        const customerResult = await pool.query(`SELECT name, email FROM users WHERE id=$1`, [booking.customer_id]);
        const customer = customerResult.rows[0]

        const vehicleResult = await pool.query(`SELECT vehicle_name, registration_number FROM vehicles WHERE id=$1`, [booking.vehicle_id]);
        const vehicle = vehicleResult.rows[0];

        enrichedBookings.push({
            ...bookings,
            customer,
            vehicle
        })

        return enrichedBookings;
    }

};

export const bookingsService = {
    createBooking,
    getBookings
}
