import express, { Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
//routes
import authRoutes from './routes/auth';
import { connectMongoDB } from './configs/mongoDB';

import './helpers/oauth';
const app = express();
const PORT: number = Number(process.env.PORT);

connectMongoDB();
app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);
app.get('/', (_, res: Response) => res.status(200).json({ message: 'Hello World (_)' }));
app.listen(PORT, () => console.log('server running port :' + PORT));
