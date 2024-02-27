import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import { User} from "../models/user.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken"
import mongoose from "mongoose";

const registerUser = asyncHandler( async (req, res) => {
    console.log("registerUser");
    // get user details from frontend
    // validation - not empty
    // check if user already exists: username, email
    // check for images, check for avatar
    // upload them to cloudinary, avatar
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return res


    const {fullName, email, username, password , gender, contactNo} = req.body
    console.log("email: ", email);
    console.log("username: ", username);
    console.log("password: ", password);
    console.log("fullName: ", fullName);
    console.log("gender: ", gender);
    console.log("contactNo: ", contactNo);

    if (
        [fullName, email, username, password,contactNo,gender].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    })
    console.log(existedUser);
    if (existedUser) {
        throw new ApiError(409, "User with email or username already exists")
    }
    // //console.log(req.files);

    // // const avatarLocalPath = req.files?.avatar[0]?.path;
    // // console.log(avatarLocalPath)
    // // //const coverImageLocalPath = req.files?.coverImage[0]?.path;

    // // let coverImageLocalPath;
    // // if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
    // //     coverImageLocalPath = req.files.coverImage[0].path
    // // }
    

    // // if (!avatarLocalPath) {
    // //     throw new ApiError(400, "Avatar file is required")
    // // }

    // // const avatar = await uploadOnCloudinary(avatarLocalPath)
    // // const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    // // if (!avatar) {
    // //     throw new ApiError(400, "Avatar file is required")
    // // }
   
console.log("Uploading");
    const user = await User.create({
        fullName,
       // avatar:  "",//avatar.url ||
        ///coverImage: "",//  \\ coverImage?.url 
        email, 
        password,
        username: username.toLowerCase(),
        gender,
        contactNo
    })
    console.log(user);

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered Successfully")
    )
} )



const loginUser = asyncHandler(async (req, res) =>{
    // req body -> data
    // username or email
    //find the user
    //password check
    //access and referesh token
    //send cookie

    const {email, username, password} = req.body
    console.log(email);

    if (!username && !email) {
        throw new ApiError(400, "username or email is required")
    }
    
    // Here is an alternative of above code based on logic discussed in video:
    // if (!(username || email)) {
    //     throw new ApiError(400, "username or email is required")
        
    // }

    // User Mongooos ka User Hai 
    const user = await User.findOne({
        $or: [{username}, {email}]
    })

    if (!user) {
        throw new ApiError(404, "User does not exist")
    }

    // user hamara banaya huaa user hai 15:50 vedio 16
   const isPasswordValid = await user.isPasswordCorrect(password)

   if (!isPasswordValid) {
    throw new ApiError(401, "Invalid user credentials")
    }
    console.log(user.id);
    
   const {accessToken, refreshToken} = await generateAccessAndRefereshTokens(user._id)
    // .select("-password -access_token") jo nane bhajne hai
    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

    const options = {
        httpOnly: true, // server se he modefy ho ga 
        secure: true
    }

    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(
            200, 
            {   // modile app or local storage mee cookies save karna cha hat hai
                user: loggedInUser, accessToken, refreshToken
            },
            "User logged In Successfully"
        )
    )

})
const generateAccessAndRefereshTokens = async(userId) =>{
    try {
        const user = await User.findById(userId)
        console.log(user)
        const accessToken = User.generateAccessToken()
        console.log("accessToken")
        const refreshToken = user.generateRefreshToken()
        console.log("Access token");


        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return {accessToken, refreshToken}


    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating referesh and access token")
    }
}


export {
    registerUser,
    loginUser

}