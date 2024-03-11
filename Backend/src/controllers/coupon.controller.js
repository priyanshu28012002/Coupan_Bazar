import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js"
import { Coupon } from "../models/coupon.model.js"
import { User } from "../models/user.model.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import mongoose from "mongoose";

const listCoupon = asyncHandler(async (req, res) => {
    const { companyName,
        couponCode,
        urlForDiscount,
        minPrice,
        expiryDate,
        offer,
        discountType,
        ownerId,
        category } = req.body;
    // companyName,couponCode,urlForDiscount,status,minPrice,expiryDate,offer,discountType,sellDate,buyerId,ownerId
    if (
        [   companyName,
            couponCode,
            urlForDiscount,
            minPrice,
            expiryDate,
            offer,
            discountType,
            ownerId,
            category
        ].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }
    console.log(companyName,
        couponCode,
        urlForDiscount,
        minPrice,
        expiryDate,
        offer,
        discountType,
        ownerId,
        category,
    );

    const coupon = await Coupon.create({

        companyName,
        couponCode,
        urlForDiscount,
        minPrice,
        expiryDate,
        offer,
        discountType,
        category,
        ownerId,
    })
    console.log(coupon);
    const couponCreated = await Coupon.findById(coupon._id);
    if (!couponCreated) {
        throw new ApiError(500, "Something went wrong while listing the Coupon")
    }

    return res.status(201).json(
        new ApiResponse(200, couponCreated, "Coupon Listing Successfully")
    )

})
const coupons = asyncHandler(async (req, res) => {
    try {

        // Query the database to fetch all coupons
        const couponsDetail = await Coupon.find({});
        // Send the fetched coupons as a response
        return res.status(200).json(couponsDetail);
    } catch (error) {
        // Handle errors
        return new ApiError(500, error.message);
    }

})

const showCoupons = asyncHandler(async (req, res) => {
    const { category } = req.params;
    console.log(category);
    try {
        const pipelineCoupon = [
            {
                $match: {
                    category: category,
                   // status: "available"
                }
            },
            {
                $lookup: {
                    from: "users", // Name of the User collection
                    localField: "ownerId",
                    foreignField: "_id",
                    as: "owner"
                }
            },
            {
                $unwind: "$owner" // Convert owner array to object
            },
            {
                $project: {
                    _id:1,
                    companyName: 1,
                    status: 1,
                    urlForDiscount: 1,
                    minPrice: 1,
                    expiryDate: 1,
                    offer: 1,
                    discountType: 1,
                    category: 1,
                    "owner.fullName": 1 // Include the owner's username
                }
            }
        ];

        const pipelineTopDealCoupons = [
            {
                $match: {
                    category: category,
                   // status: "available",
                    topDeal:true,
                }
            },
            {
                $lookup: {
                    from: "users", // Name of the User collection
                    localField: "ownerId",
                    foreignField: "_id",
                    as: "owner"
                }
            },
            {
                $unwind: "$owner" // Convert owner array to object
            },
            {
                $project: {
                    _id:1,
                    companyName: 1,
                    status: 1,
                    urlForDiscount: 1,
                    minPrice: 1,
                    expiryDate: 1,
                    offer: 1,
                    discountType: 1,
                    category: 1,
                    "owner.fullName": 1 // Include the owner's username
                }
            }
        ];


        // Use the aggregation pipeline with the Mongoose model
        const coupons = await Coupon.aggregate(pipelineCoupon);
        const topDealCoupons = await Coupon.aggregate(pipelineTopDealCoupons)
        const data = {
                allcoupons:coupons,
                topDeal:topDealCoupons
        }

        console.log(data);

        return res.status(201).json(
            new ApiResponse(200, data, "Showing Successfully")
        );

    } catch (error) {
        // Handle errors
        return new ApiError(500, error.message);
    }
});

// const showUserCoupons = asyncHandler(async (req, res) => {
//     try {
//         // Extract the user id from the request body
//       //  const id = req.params.id;
//         const {id}  = req.body;
//         console.log("the value is  "+id);
//         // Check if user id exists
//         if (!id) {
//             return res.status(400).json({
//                 success: false,
//                 error: "User id is required",
//             });
//         }

//         // Convert the id string to an ObjectId
//         const objectId = mongoose.Types.ObjectId.createFromHexString(id);
        
//         // Construct the aggregation pipelines to filter coupons by ownerId
//         const pipelineAllUserCoupon = [
//             {
//                 $match: {
//                     ownerId: objectId ,// Fetch coupons where the user is either the owner or the buyer
//                 }
//             },
//         ];

//         const pipelineSells = [
//             {
//                 $match: {
//                     ownerId: objectId,
//                     status: 'sold'
//                 }
//             },
//         ];

//         const pipelineBuys = [
//             {
//                 $match: {
//                     buyerId: objectId,
//                     status: 'sold'
//                 }
//             },
//         ];
//         const userId = objectId;
//         const pipelineInCart = [
//             // Match stage to find the user by ID
//             {
//                 $match: {
//                     _id: userId
//                 }
//             },
//             // Lookup stage to populate the cart field
//             {
//                 $lookup: {
//                     from: "coupons", // Assuming the collection name is "coupons"
//                     localField: "cart",
//                     foreignField: "_id",
//                     as: "cartCoupons"
//                 }
//             },
//             // Unwind stage to deconstruct the cartCoupons array
//             {
//                 $unwind: "$cartCoupons"
//             },
//             // Lookup stage to join with the users collection to get the owner's full name
//             {
//                 $lookup: {
//                     from: "users", // Name of the User collection
//                     localField: "cartCoupons.ownerId",
//                     foreignField: "_id",
//                     as: "owner"
//                 }
//             },
//             // Unwind stage to deconstruct the owner array
//             {
//                 $unwind: "$owner"
//             },
//             // Project stage to include only the relevant fields
//             {
//                 $project: {
//                     _id: "$cartCoupons._id",
//                     companyName: "$cartCoupons.companyName",
//                     status: "$cartCoupons.status",
//                     urlForDiscount: "$cartCoupons.urlForDiscount",
//                     minPrice: "$cartCoupons.minPrice",
//                     expiryDate: "$cartCoupons.expiryDate",
//                     offer: "$cartCoupons.offer",
//                     discountType: "$cartCoupons.discountType",
//                     category: "$cartCoupons.category",
//                     ownerId: "$cartCoupons.ownerId",
//                     // Add the owner's full name to the projection
//                     ownerFullName: "$owner.fullName"
//                 }
//             }
//         ];

//         // Execute the aggregation pipelines to fetch coupons
//         const allUserCoupons = await Coupon.aggregate(pipelineAllUserCoupon);
//         const soldCoupons = await Coupon.aggregate(pipelineSells);
//         const boughtCoupons = await Coupon.aggregate(pipelineBuys);
//         const inCart = await User.aggregate(pipelineInCart);
        
//         // Combine the results of all pipelines into a single data object
//         const data = {
//             allUserCoupons: allUserCoupons,
//             sold: soldCoupons,
//             buys: boughtCoupons,
//             cart: inCart,
//         };

//         // Return the fetched coupons in the response
//         return res.status(200).json({
//             success: true,
//             data: data,
//             message: "Coupons fetched successfully",
//         });

//     } catch (error) {
//         // Handle errors
//         console.error("Error fetching user coupons:", error);
//         return res.status(500).json({
//             success: false,
//             error: "Internal server error",
//         });
//     }
// });




const showUserCoupons = asyncHandler(async (req, res) => {
    try {
        // Extract the user name from the request body
        const  username  = req.headers.username;
        console.log(req.headers.username);
        console.log(typeof username)
        // Check if user name exists
        if (!username) {
            return res.status(400).json({
                success: false,
                error: "User name is required",
            });
        }

        // Find the user by their name
        const user = await User.findOne({ username: username });
        
        // Check if user exists
        if (!user) {
            return res.status(404).json({
                success: false,
                error: "User not found",
            });
        }

        // Construct the aggregation pipelines to filter coupons by ownerId
        const objectId = user._id;
        const pipelineAllUserCoupon = [
            {
                $match: {
                    ownerId: objectId ,// Fetch coupons where the user is either the owner or the buyer
                }
            },
        ];

        const pipelineSells = [
            {
                $match: {
                    ownerId: objectId,
                    status: 'sold'
                }
            },
        ];

        const pipelineBuys = [
            {
                $match: {
                    buyerId: objectId,
                    status: 'sold'
                }
            },
        ];

        const userId = objectId;
        const pipelineInCart = [
            // Match stage to find the user by ID
            {
                $match: {
                    _id: userId
                }
            },
            // Lookup stage to populate the cart field
            {
                $lookup: {
                    from: "coupons", // Assuming the collection name is "coupons"
                    localField: "cart",
                    foreignField: "_id",
                    as: "cartCoupons"
                }
            },
            // Unwind stage to deconstruct the cartCoupons array
            {
                $unwind: "$cartCoupons"
            },
            // Lookup stage to join with the users collection to get the owner's full name
            {
                $lookup: {
                    from: "users", // Name of the User collection
                    localField: "cartCoupons.ownerId",
                    foreignField: "_id",
                    as: "owner"
                }
            },
            // Unwind stage to deconstruct the owner array
            {
                $unwind: "$owner"
            },
            // Project stage to include only the relevant fields
            {
                $project: {
                    _id: "$cartCoupons._id",
                    companyName: "$cartCoupons.companyName",
                    status: "$cartCoupons.status",
                    urlForDiscount: "$cartCoupons.urlForDiscount",
                    minPrice: "$cartCoupons.minPrice",
                    expiryDate: "$cartCoupons.expiryDate",
                    offer: "$cartCoupons.offer",
                    discountType: "$cartCoupons.discountType",
                    category: "$cartCoupons.category",
                    ownerId: "$cartCoupons.ownerId",
                    // Add the owner's full name to the projection
                    ownerFullName: "$owner.fullName"
                }
            }
        ];

        // Execute the aggregation pipelines to fetch coupons
        const allUserCoupons = await Coupon.aggregate(pipelineAllUserCoupon);
        const soldCoupons = await Coupon.aggregate(pipelineSells);
        const boughtCoupons = await Coupon.aggregate(pipelineBuys);
        const inCart = await User.aggregate(pipelineInCart);
        
        // Combine the results of all pipelines into a single data object
        const data = {
            allUserCoupons: allUserCoupons,
            sold: soldCoupons,
            buys: boughtCoupons,
            cart: inCart,
        };
        console.log(data);
        console.log("data send Successful");
        // Return the fetched coupons in the response
        return res.status(200).json({
            success: true,
            data: data,
            message: "Coupons fetched successfully",
        });

    } catch (error) {
        // Handle errors
        console.error("Error fetching user coupons:", error);
        return res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
});


// A step-by-step algorithm for the `showUserCartCoupon` function:

// 1. **Extract User ID**: Extract the user ID from the request body.

// 2. **Check User ID**: Check if the user ID exists. If not, return a response with an error message indicating that the user ID is required.

// 3. **Convert User ID to ObjectId**: Convert the user ID string to a MongoDB ObjectId.

// 4. **Aggregation Pipeline**:
//     - **Match Stage**: Match the user document by its ObjectId.
//     - **Lookup Stage**: Populate the `cart` field to retrieve the coupon IDs from the user document.
//     - **Unwind Stage**: Deconstruct the `cartCoupons` array to create a new document for each coupon ID.
//     - **Project Stage**: Project only the relevant fields from the coupons, including the owner's full name from the embedded `owner` field.

// 5. **Execute Pipeline**: Execute the aggregation pipeline using the User model's `aggregate` method.

// 6. **Handle Errors**: If any errors occur during the aggregation process, catch them and return a response with an internal server error message.

// 7. **Return Response**: If the aggregation is successful, return a response with the fetched user's cart coupons containing only the relevant information, including the owner's full name.

// This algorithm outlines the process of fetching a user's cart coupons with the necessary information using an aggregation pipeline.
const showUserCartCoupon = asyncHandler(async (req, res) => {
    try {
        // Extract the user ID from the request body
        const { id } = req.body;
        
        // Check if user ID exists
        if (!id) {
            return res.status(400).json({
                success: false,
                error: "User ID is required",
            });
        }

        // Convert the user ID string to an ObjectId
        //const objectId = mongoose.Types.ObjectId.createFromHexString(id);
        const userId = mongoose.Types.ObjectId.createFromHexString(id);
        
        // // Aggregation pipeline to retrieve user's cart coupons
        // const pipeline = [
        //     // Match stage to find the user by ID
        //     {
        //         $match: {
        //             _id: userId
        //         }
        //     },
        //     // Lookup stage to populate the cart field
        //     {
        //         $lookup: {
        //             from: "coupons", // Assuming the collection name is "coupons"
        //             localField: "cart",
        //             foreignField: "_id",
        //             as: "cartCoupons"
        //         }
        //     },
        //     // Unwind stage to deconstruct the cartCoupons array
        //     {
        //         $unwind: "$cartCoupons"
        //     },
        //     // Project stage to include only the relevant fields
        //     {
        //         $project: {
        //             _id: "$cartCoupons._id",
        //             companyName: "$cartCoupons.companyName",
        //             status: "$cartCoupons.status",
        //             urlForDiscount: "$cartCoupons.urlForDiscount",
        //             minPrice: "$cartCoupons.minPrice",
        //             expiryDate: "$cartCoupons.expiryDate",
        //             offer: "$cartCoupons.offer",
        //             discountType: "$cartCoupons.discountType",
        //             category: "$cartCoupons.category",
        //             ownerId: "$cartCoupons.ownerId",
        //             // Add a projection to include the owner's full name
        //             ownerFullName: "$cartCoupons.owner.fullName"
        //         }
        //     }
        // ];


        const pipeline = [
            // Match stage to find the user by ID
            {
                $match: {
                    _id: userId
                }
            },
            // Lookup stage to populate the cart field
            {
                $lookup: {
                    from: "coupons", // Assuming the collection name is "coupons"
                    localField: "cart",
                    foreignField: "_id",
                    as: "cartCoupons"
                }
            },
            // Unwind stage to deconstruct the cartCoupons array
            {
                $unwind: "$cartCoupons"
            },
            // Lookup stage to join with the users collection to get the owner's full name
            {
                $lookup: {
                    from: "users", // Name of the User collection
                    localField: "cartCoupons.ownerId",
                    foreignField: "_id",
                    as: "owner"
                }
            },
            // Unwind stage to deconstruct the owner array
            {
                $unwind: "$owner"
            },
            // Project stage to include only the relevant fields
            {
                $project: {
                    _id: "$cartCoupons._id",
                    companyName: "$cartCoupons.companyName",
                    status: "$cartCoupons.status",
                    urlForDiscount: "$cartCoupons.urlForDiscount",
                    minPrice: "$cartCoupons.minPrice",
                    expiryDate: "$cartCoupons.expiryDate",
                    offer: "$cartCoupons.offer",
                    discountType: "$cartCoupons.discountType",
                    category: "$cartCoupons.category",
                    ownerId: "$cartCoupons.ownerId",
                    // Add the owner's full name to the projection
                    ownerFullName: "$owner.fullName"
                }
            }
        ];
        

        // Execute the aggregation pipeline
        const cartCoupons = await User.aggregate(pipeline);

        // Return the result in the response
        return res.status(200).json({
            success: true,
            data: cartCoupons,
            message: "User's cart coupons fetched successfully",
        });
    } catch (error) {
        // Handle errors
        console.error("Error fetching user's cart coupons:", error);
        return res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
});

// A step-by-step algorithm for handling the /buy endpoint:

// Extract the id from the request body: Retrieve the id parameter from the request body.

// Convert id to ObjectId: Use mongoose.Types.ObjectId.createFromHexString() to convert the id string to an ObjectId.

// Update coupon status to "sold": Use Coupon.findOneAndUpdate() to update the status of the coupon to "sold". Set the buyerId to the ObjectId obtained in step 2. Also, set the sellDate to the current date/time.

// Handle success and errors: If the update operation is successful, return a success response. If there are any errors, handle them appropriately and return an error response.

const buyCoupon = asyncHandler(async (req, res) => {
    try {
      // Step 1: Extract the id from the request body
      const { couponId, userId } = req.body;
      console.log(couponId, userId);
   
      // Step 2: Convert id to ObjectId
     
      const couponObjectId = mongoose.Types.ObjectId.createFromHexString(couponId);
      const userObjectId = mongoose.Types.ObjectId.createFromHexString(userId);
  
      // Step 3: Update coupon status to "sold"
      const updatedCoupon = await Coupon.findOneAndUpdate(
        { _id: couponObjectId },
        { $set: { status: "sold", buyerId: userObjectId, sellDate: new Date() } },
      );
  
      if (!updatedCoupon) {
        // If no coupon found, return an error response
        return res.status(404).json({
          success: false,
          error: "Coupon not found"
        });
      }
  
      // Step 4: Handle success
      return res.status(200).json({
        success: true,
        message: "Coupon purchased successfully",
        data: updatedCoupon
      });
    } catch (error) {
      // Step 4: Handle errors
      console.error("Error buying coupon:", error);
      return res.status(500).json({
        success: false,
        error: "Internal server error"
      });
    }
  });


//   the step-by-step algorithm for adding a coupon to the user's cart:

//   Extract the userId and couponId from the request body: Retrieve both the userId and couponId parameters from the request body.
  
//   Convert userId to ObjectId: Use mongoose.Types.ObjectId.createFromHexString() to convert the userId string to an ObjectId.
  
//   Find the user by userId: Use the User model to find the user based on the userId obtained in step 2.
  
//   Add couponId to the user's cart: Push the couponId into the cart array of the user obtained in step 3.
  
//   Save the updated user: Save the user object after updating the cart.
  
//   Handle success and errors: If the operation is successful, return a success response. If there are any errors, handle them appropriately and return an error response.
  


const addToCart = asyncHandler(async (req, res) => {
    try {
      // Step 1: Extract userId and couponId from the request body
      const { couponId, userId } = req.body;
   
      // Step 2: Convert id to ObjectId
     
      const couponObjectId = mongoose.Types.ObjectId.createFromHexString(couponId);
      const userObjectId = mongoose.Types.ObjectId.createFromHexString(userId);
  
  
      // Step 3: Find the user by userId
      const user = await User.findById(userObjectId);
  
      if (!user) {
        // If no user found, return an error response
        return res.status(404).json({
          success: false,
          error: "User not found"
        });
      }
  
      // Step 4: Add couponId to the user's cart
      user.cart.push(couponObjectId);
  
      // Step 5: Save the updated user
      await user.save();
  
      // Step 6: Handle success
      return res.status(200).json({
        success: true,
        message: "Coupon added to cart successfully",
        data: user
      });
    } catch (error) {
      // Step 6: Handle errors
      console.error("Error adding coupon to cart:", error);
      return res.status(500).json({
        success: false,
        error: "Internal server error"
      });
    }
  });

  

export {
    listCoupon,
    coupons,
    showCoupons,
    showUserCoupons,
    showUserCartCoupon,
    buyCoupon,
    addToCart
}