import express from "express";
import userRoutes from './modules/users/users.routes.js'

const app = express();

app.use(express.json());

app.get('/api/health', (req, res) => {
    res.json({
        status: 'OK',
        message: 'Task manager API is running'
    })
});

app.use('/api/users', userRoutes);


export default app;