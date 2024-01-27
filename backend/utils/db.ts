import mongoose from "mongoose";
import colors from "colors";

export const connectDB = async () => {
    mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/expgrql').then(conn => {
        console.log(colors.cyan.underline(`Mongo DB Connected: ${conn.connection.host}`));
    }).catch((err) => {
        console.error(colors.red.bold(`Mongo DB Error occured: ${err}`))
    });
}