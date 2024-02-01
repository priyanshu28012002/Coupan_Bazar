import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        console.log("MongoDB URL:", process.env.MONGOOSDB_URL);
        const connectionString = `${process.env.MONGOOSDB_URL}/${DB_NAME}`;
        const connestionInstance = await mongoose.connect(`${connectionString}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        //        const connestionInstance = await mongoose.connect(`${process.env.MONGOOSDB_URL}/${DB_NAME}`);
        console.log(connestionInstance.connection.host);
        console.log('\nMONGODB connection !! DB HOST:', connestionInstance.connection.host);
    } catch (error) {
        console.log("Mongodb connection Error", error);
        process.exit(1);
    }
};

export default connectDB; 