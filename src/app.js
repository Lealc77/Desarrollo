import express from 'express';
import morgan  from 'morgan';
import authRoutes from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';
import venderRoutes from './routes/vender.routes.js';
import cors from 'cors'

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", venderRoutes);


export default app;