import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import clientRouter from './routes/clientRouter';
import projectRouter from './routes/projectRouter';
import { connectDB } from './utils/db';
import colors from 'colors';

dotenv.config();

const app = express();
const port = process.env.PORT || 6000;

app.use(cors());
app.use(express.json());

connectDB().then(() => {
    console.log(colors.cyan.underline(`Mongo DB Connected`));
    app.use('/clients', clientRouter);
    app.use('/projects', projectRouter);

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });

}).catch(err => {
    console.error(colors.red.bold(`Error connecting to DB: ${err}`));
});

// Add your routes and middleware here
