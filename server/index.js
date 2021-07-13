import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import usersRoutes from './routes/users.js';
import loginRoutes from './routes/login.js';

const app = express();
dotenv.config();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// for local back database 
app.use('/users', usersRoutes)

// for user login authentication
app.use('/user', loginRoutes)

app.get('/', (req, res) => {
  res.send('Hello from main root of application!');
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL,
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);