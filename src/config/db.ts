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
};

export default initDB;