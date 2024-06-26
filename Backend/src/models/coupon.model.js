import mongoose, {Schema} from "mongoose";

const couponSchema = new Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    couponCode: {
      type: String,
      unique: true,
      required: true,
    },
    urlForDiscount: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["available", "sold", "expired"],
      default: 'available',
      required: true,
    },
    minPrice: {
      type: Number,
      required: true,
    },
    expiryDate: {
      type: Date,
      required: true,
    },
    offer: {
      type: String,
      required: true,
    },
    discountType: {
      type: String,
      enum: ["percentage", "fixed"],
      required: true,
    },
    sellDate: {
      type: Date,
      default: Date.now, // Default value is set to the current date and time
      required: true,
    },
    buyerId: {
        type: mongoose.Schema.Types.ObjectId,
        default: '',
    },
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    topDeal:{
      type:Boolean,
      default: false,
    },
    monthlyTopSeller:{
      type:Boolean,
      default: false,
    },
    category: {
      type: String,
      enum: ['healthCare', 'electronics', 'fashion', 'food', 'beauty', 'books'],
      required: true
    },
  },
  {
    timestamps: true,
  }
);

export const Coupon = mongoose.model("Coupon", couponSchema);
