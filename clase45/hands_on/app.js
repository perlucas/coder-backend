import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import { engine } from 'express-handlebars'

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import viewsRouter from './routes/views.router.js';

const app = express();
const PORT = process.env.PORT || 8080;
const connection = mongoose.connect(process.env.MONGO_URL, { dbName: process.env.DB_NAME })

app.use(express.json());
app.use(cookieParser());

app.engine('handlebars', engine())
app.set('view engine', 'handlebars');
app.set('views', 'src/views');


app.use('/', viewsRouter)
app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);
app.use('/api/adoptions', adoptionsRouter);
app.use('/api/sessions', sessionsRouter);

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
