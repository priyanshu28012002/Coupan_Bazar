import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"
import { Cookie } from "express-session";
import bodyParser from "body-parser";

const app = express();

// app.use(cors())
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({
//     extended: true,
//     limit:"10kb"
// }))

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
// setting  to resive data for
// url 
// json unlimit data
// body
//app.use(express.json({limit:"10kb"}));


// url data 
// search priyanshu srivastava in url priyanshu+srivastava
//                                url priyanshu%20srivastava
// object ke under object we can handel the nestedobject   

app.use(express.json());
app.use(express.urlencoded({extended:true,limit:"10kb"}))

//store the file in the servr public directory to server
app.use(express.static("public"))

//  to assess the Cookie form the user brouser and set the Cookie for the user brouser
//  crud operation on Cookie

//  only server can read and remove the special Cookie

app.use(cookieParser());

app.use(function(req, res, next){
    console.log('%s %s', req.method, req.url);
    next();
  });

// testing the server 

app.get("/", (req, res) => {
    res.send("Welcome is running start development");
});

// routes import 
import userRouter from './routes/user.routes.js'
import couponRoute from './routes/coupon.routes.js'

// routes declarations 
app.use("/api/v1/users", userRouter);
app.use("/api/v1/coupon", couponRoute);





export { app };