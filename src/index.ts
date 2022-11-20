import express from 'express';
import dotenv from 'dotenv';

//routes
import authRoutes from './routes/auth';
import { connectMongoDB } from './configs/mongoDB';

dotenv.config();

const app = express();
const PORT: number = Number(process.env.PORT) || 4000;

connectMongoDB();
app.use(express.json());
app.use('/auth', authRoutes);
app.get('/', (_, res) => res.status(200).json({ message: 'Hello World' }));
app.listen(PORT, () => console.log('http://localhost:' + PORT));
