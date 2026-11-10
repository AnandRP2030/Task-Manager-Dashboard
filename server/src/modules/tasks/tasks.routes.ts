import { createTask, getAllTasks } from "./tasks.controller.js";
import express from 'express';

const taskRoutes = express.Router();

taskRoutes.post('/', createTask);
taskRoutes.get('/', getAllTasks);

export default taskRoutes;