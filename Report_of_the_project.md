# Hey I am the Developer of he Fullstack Project

It is the E-Coupon exchange system 

## Project deviden  in to Two part 
### FrontEnd

Tailwind
    className CSS
    Sketelen For Waiting Period
    Responsive CSS for the Large Small Mediam screen
    Different CSS for Dark and Light Mode
Components
    NavBar Component
    Second NavBar Component
    Footer Component
    CouponSlider:
        Normal Coupon Component
        Top deal Component
        Recomended Coupon Component
    WelcomeBannerComponent
    TestimonialComponent
    Coupon Card Component
    Top Monthly Seller Component
Pages
    LandingPage
    Home
    Cart
    ProductByCategory
    ProfilePage

Routing
    Unsecured routes
        /
        /login
        /signup
        /contact
        /about
        
    Secured Routes
        /home
        /profile
        /product/:category
        /cart
        /listCoupon
Hooks
    useState
    useEffect
    useContext
    
Context API:
    ThemeProvider
    User Info Provider
Redux: - createAsyncThunk & extraReducers
    Coupon 
        lodding
        allcoupons
        topDealCoupons
        error
    User
      isAuthenticated
      userData
      accessToken



### BackEnd
Express server 

JWT token
    Access token 
    Refresh token

DB-Model for the text and Numariacl 
    Coupon.Model
    User.Model

Cloudnary for the image
    ProfileImage
    Coverimage

Middlewares:
    auth.middleware-verifyJWT
    multer.middleware-upload

Utilities
    ApiError
    ApiResponse
    asyncHandler
Controllers
    Coupon.Controller
    User.Controller

Routs
    /api/v1/users
    /api/v1/coupon

Apis
    User Routs
        post
            /register
            /login
            /logout
    Coopons Routs
        get
            /user-coupon-Cart
            /show/:category
            /user-coupons
        post
            /listCoupon
            /user-coupon-buy
            /user-coupon-addToCart

Aggregation pipeline and Nested aggregation pipeline
    pipelineCoupon
    pipelineTopDealCoupons
    pipelineAllUserCoupon
    pipelineSells
    pipelineBuys
    pipelineInCart


