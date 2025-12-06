import { pool } from "../../config/db";
import bcrypt from 'bcryptjs'

const createUser = async (payload: Record<string, unknown>) => {
    const { name, email, phone, role, password } = payload;

    const hashedPass = await bcrypt.hash(password as string, 10);
    const result = await pool.query(`INSERT INTO users(name, email, phone, role, password) VALUES ($1, $2, $3, $4, $5) RETURNING id, name, email, phone, role`, [name, email, phone, role, hashedPass]);
    return result
};

export const usersService = {
    createUser
}