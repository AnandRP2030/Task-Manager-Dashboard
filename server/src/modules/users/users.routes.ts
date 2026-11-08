import { createUser, getUsers } from './users.controller.js';
import express from 'express';

const userRoutes = express.Router();

//User routes
userRoutes.post('/', createUser);
userRoutes.get('/', getUsers);

export default userRoutes;