import dotenv from 'dotenv'
import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";
import connectDB from "./db/index.js";
import {app} from "./app.js"


dotenv.config({
    path: './.env'
})


console.log(process.env.MONGOOSDB_URL);
console.log(process.env.PORT);

connectDB()
.then((connection) => {
    app.on("error", (err) => {
        console.log(err);
        throw err;
    })
    app.listen(process.env.PORT || 8000,()=>{
        console.log('Starting server on port ' + process.env.PORT);
    });
})
.catch((error) => {
    console.error("Mongo db connection Failed", error);
})

