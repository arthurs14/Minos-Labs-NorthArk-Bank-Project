import express from 'express';
import cors from 'cors';

import userRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors())
app.use('/users', userRoutes)

app.get('/', (req, res) => {
  res.send('Hello from main root of application!');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));