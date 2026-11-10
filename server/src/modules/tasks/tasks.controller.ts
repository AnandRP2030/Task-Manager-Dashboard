import { z } from 'zod';
import { type Request, type Response } from 'express';
import { STATUS_CODES, ERROR_CODES } from "../constants/constants.js";
import pool from "../../db/pool.js";

const statusEnum = z.enum(['TODO', 'DOING', 'DONE']).default("TODO");

const taskSchema = z.object({
    title: z.string().min(1, 'Task is required.'),
    description: z.string().optional(),
    estimateMinutes: z.number().optional(),
    taskLink: z.string().optional(),
    status: statusEnum,
    userId: z.int().positive(),
    steps: z.array(z.string()).optional()
});

export const createTask = async (req: Request, res: Response) => {
    const payloadData = taskSchema.safeParse(req.body);

    if (!payloadData.success) {
        return res.status(STATUS_CODES.BAD_INPUT).json({
            error: 'Validation Failed',
            issues: payloadData.error.flatten()
        });
    }

    const { title, description, estimateMinutes, taskLink, status, userId, steps } = payloadData.data;

    // 1. check out a single client from the pool
    const client = await pool.connect();
    try {
        await client.query('BEGIN');

        const taskQuery = `
        INSERT INTO "Task" (title, description, "estimateMinutes", "taskLink", status, "userId")
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *;`;

        const taskResult = await client.query(taskQuery, [
            title,
            description || null,
            estimateMinutes || null,
            taskLink || null,
            status || 'TODO',
            userId
        ]);

        const newTask = taskResult.rows[0];

        if (steps && steps.length > 0) {
            for (let i = 0; i < steps.length; i++) {
                const stepQuery = `
                    INSERT INTO "TaskStep" ("taskId", "stepNumber", content)
                    VALUES ($1, $2, $3);
                `;

                await client.query(stepQuery, [newTask.id, i + 1, steps[i]]);
            }
        }

        await client.query('COMMIT');

        return res.status(STATUS_CODES.SUCCESSFULLY_CREATED).json({
            message: "Task created successfully",
            data: newTask
        });

    } catch (e) {
        await client.query('ROLLBACK');
        console.error(e);
        return res.status(STATUS_CODES.SERVER_ERROR).json({
            error: "Failed to create task"
        });
    } finally {
        // CRITICAL: Always release the client back to the pool.
        client.release();
    }
}

export const getAllTasks = async (req: Request, res: Response) => {
    try {
        const q = `SELECT * FROM "Task"`;
        const result = await pool.query(q);
        return res.status(STATUS_CODES.SUCCESS).json({
            data: result.rows,
            message: "All tasks"
        });

    } catch (e) {
        console.error(e);
        return res.status(STATUS_CODES.SERVER_ERROR).json({
            error: "Failed to create task"
        });
    }
}