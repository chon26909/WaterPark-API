import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT: number = Number(process.env.PORT) || 4000;

app.get('/', (_, res) => {
  res.status(200).json({ message: 'Hello World' });
});
app.listen(PORT, () => console.log('http://localhost:' + PORT));
