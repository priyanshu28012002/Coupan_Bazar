import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {

        console.log("MongoDB URL:", process.env.MONGOOSDB_URL);
        console.log("DB_NAME: ", DB_NAME);
        const connectionString = `${process.env.MONGOOSDB_URL}/${DB_NAME}`;
        console.log(connectionString);
        // const connestionInstance = await mongoose.connect(`${connectionString}`, {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        // });
        const connestionInstance = await mongoose.connect(`${process.env.MONGOOSDB_URL}/${DB_NAME}`);
       // console.log(connestionInstance.connection.host);
        console.log('\nMONGODB connection !! DB HOST:', connestionInstance.connection.host);
    } catch (error) {
        console.log("Mongodb connection Error", error);
        process.exit(1);
    }
};


// const connectDB = async () => {
//     try {
//         console.log("MongoDB URL:", process.env.MONGOOSDB_URL);
//         console.log("DB_NAME: ", DB_NAME);
        
//         // Constructing the connection string
//         const connectionString = `${process.env.MONGOOSDB_URL}`;
//         console.log(connectionString);
        
//         // Establishing a connection to MongoDB
//         const connectionInstance = await mongoose.connect(connectionString);
//         console.log('\nMONGODB connection !! DB HOST:', connectionInstance.connection.host);
//     } catch (error) {
//         // Handling connection errors
//         console.log("MongoDB connection Error", error);
//         process.exit(1); // Exiting the process if connection fails
//     }
// };
export default connectDB; 