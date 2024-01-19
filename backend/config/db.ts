import mongoose, {Mongoose} from 'mongoose';
import colors from 'colors';
export const  connectMongo = async () => {
    // const conn = await mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/');

    // console.log(`Mongo Connected: ${}`)
    
    mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/').then(conn => {
        console.log(colors.cyan.underline(`Mongo DB Connected: ${conn.connection.host}`));
    }).catch((err) => {
        console.error(colors.red.bold(`Mongo DB Error occured: ${err}`))
    });
}