import express, { Response } from 'express';
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
app.get('/', (_, res: Response) =>
    res.status(200).json({ message: 'Hello World : ' + new Date() })
);
app.listen(PORT, () => console.log('server running port :' + PORT));
