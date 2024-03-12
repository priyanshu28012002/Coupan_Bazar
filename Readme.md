# E-Coupon Exchange System

## Project Overview

Conceptualized and implemented an innovative Web Coupon Exchange System to provide users with a
platform for sharing and redeeming various discount coupons from different E-retailers.

_The E-Coupon Exchange System is divided into two main parts:_

### Frontend

- **Tailwind CSS**:

  - Utilized for styling.
  - Uses class-based CSS.
  - Provides a skeleton for waiting periods.
  - Responsive design for various screen sizes.
  - Different CSS for dark and light mode.

- **Components**:

  - **NavBar Component**: Navigation bar for the application.
  - **Second NavBar Component**: Secondary navigation bar.
  - **Footer Component**: Footer section of the application.
  - **CouponSlider**: Component for displaying various types of coupons.

    Normal Coupon Component  
    Top deal Component  
    Recomended Coupon Component

  - **WelcomeBannerComponent**: Component for displaying a welcome banner.
  - **TestimonialComponent**: Component for displaying user testimonials.
  - **Coupon Card Component**: Component for displaying individual coupon details.
  - **Top Monthly Seller Component**: Component for displaying top monthly sellers.

- **Pages**:

  - **LandingPage**: The initial landing page of the application.
  - **Home**: Home page after logging in.
  - **Cart**: Shopping cart page.
  - **ProductByCategory**: Page displaying products based on category.
  - **ProfilePage**: User profile page.

- **Routing**:

  - **Unsecured Routes**: Routes accessible without authentication.  
     ` /  `  
     `  /login `  
     `  /signup `  
     `  /contact  `  
     `  /about   `
  - **Secured Routes**: Routes accessible only after authentication.  
    ` /home`  
     `   /profile`  
     ` /product/:category`  
     `  /cart   `  
     `  /listCoupon   `

- **Hooks**:

  - **useState**: Hook for managing state in functional components.
  - **useEffect**: Hook for performing side effects in functional components.
  - **useContext**: Hook for accessing context in functional components.

- **Context API**:

  - **ThemeProvider**: Provides theme context for the application.
  - **User Info Provider**: Provides user information context for the application.

- **Redux**:
  - Utilized for state management.
  - Implements `createAsyncThunk` and `extraReducers`.
  - Manages state for **Coupons** and **User**.

### Backend

- **Express Server**:

  - Backend server framework.

- **JWT Token**:

  - Utilized for authentication.
  - Includes **Access token** and **Refresh token**.

- **DB Models**:

  - Models for storing textual and numerical data.
  - Includes models for **Coupons** and **Users**.

- **Cloudinary**:

  - Used for storing and serving images.
  - Stores profile and cover images.

- **Middlewares**:

  - **auth.middleware-verifyJWT**: Middleware for verifying JWT tokens.
  - **multer.middleware-upload**: Middleware for handling file uploads.

- **Utilities**:

  - **ApiError**: Utility for handling API errors.
  - **ApiResponse**: Utility for constructing API responses.
  - **asyncHandler**: Utility for handling asynchronous functions.

- **Controllers**:

  - **Coupon.Controller**: Controller for handling coupon-related operations.
  - **User.Controller**: Controller for handling user-related operations.

- **Routes**:

  - Defines API routes for users and coupons.  
     `/api/v1/users`  
    `    /api/v1/coupon`

- **APIs**:

  - **User Routes**: APIs for user-related operations.  
    _Post_  
     `/register`  
     `/login`  
     `/logout`
  - **Coupons Routes**: APIs for coupon-related operations.  
    _get_  
     ` /user-coupon-Cart`  
     ` /show/:category`  
     ` /user-coupons`  
     _post_  
     ` /listCoupon`  
     ` /user-coupon-buy`  
     ` /user-coupon-addToCart`

- **Aggregation Pipeline**:
  - Utilized for performing complex data aggregations.
  - Includes pipelines for various coupon-related aggregations.  
    `pipelineCoupon`  
     ` pipelineTopDealCoupons`  
     ` pipelineAllUserCoupon`  
     ` pipelineSells`  
     ` pipelineBuys`  
     ` pipelineInCart`
