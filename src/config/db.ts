import { Pool } from "pg";
import config from ".";

export const pool = new Pool({
    connectionString: `${config.connectionString}`,
});

const initDB = async () => {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) UNIQUE NOT NULL,
        email VARCHAR(150) UNIQUE NOT NULL,
        password TEXT NOT NULL,
        phone VARCHAR(15) NOT NULL,
        role VARCHAR(100) NOT NULL CHECK (role IN('admin', 'customer'))
        )
    `)

    await pool.query(`
        CREATE TABLE IF NOT EXISTS vehicles(
        id SERIAL PRIMARY KEY,
        vehicle_name VARCHAR(100) NOT NULL,
        type VARCHAR(20) NOT NULL CHECK (type IN ('car', 'bike', 'van', 'SUV')),
        registration_number VARCHAR(50) UNIQUE NOT NULL,
        daily_rent_price INT NOT NULL CHECK(daily_rent_price > 0),
        availability_status VARCHAR(20) NOT NULL CHECK(availability_status IN ('available', 'booked')) DEFAULT ('available')
        )
    `)
};

export default initDB;