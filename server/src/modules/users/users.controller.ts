import { STATUS_CODES, ERROR_CODES } from "../constants/constants.js";
import pool from "../../db/pool.js";
import { z } from 'zod';
import { type Request, type Response } from 'express';

const registerSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address format')
});

export const createUser = async (req: Request, res: Response) => {
    const payloadRes = registerSchema.safeParse(req.body);

    if (!payloadRes.success) {
        return res.status(STATUS_CODES.BAD_INPUT).json({
            error: 'Validation failed',
            issues: payloadRes.error.flatten()
        })
    }   
    const { name, email } = payloadRes.data;
    const q = `INSERT INTO "User" (name, email) 
    VALUES ($1, $2)
    RETURNING *;`;
    try {
        const result = await pool.query(q, [name, email]);

        return res.status(STATUS_CODES.SUCCESSFULLY_CREATED).json({
            message: "user created succesfully",
            data: result.rows[0]
        });

    } catch (error: any) {
        if (error.code === ERROR_CODES.UNIQUE_VIOLATION) {
            return res.status(400).json({ error: `Email already registered. ` });
        }
        console.error(error);
        return res.status(STATUS_CODES.SERVER_ERROR).json({ error: 'Internal server error' });
    }
}

export const getUsers = async (req: Request, res: Response) => {
    const q = `SELECT * FROM "User"`;

    try {
        const result = await pool.query(q);
        return res.status(STATUS_CODES.SUCCESS).json({
            message: "All users",
            data: result.rows
        });

    } catch (error: any) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
}