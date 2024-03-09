import React from 'react';

const ProductDescription = ({ product }) => {
    return (
        <div className="container mx-auto py-8 bg-white">
            <h1 className="text-3xl font-bold mb-4">{product.companyName} - Product Description</h1>
            <div className="bg-white shadow-md p-8 rounded-lg  grid sm:grid-cols-4">
                <div className=' bg-white rounded-lg sm:col-span-3'>

                    <h2 className="text-xl font-semibold mb-4">Coupon Details</h2>
                    <p><strong>Coupon Code:</strong> {product.couponCode}</p>
                    <p><strong>Status:</strong> {product.status}</p>
                    <p><strong>Minimum Price:</strong> ${product.minPrice}</p>
                    <p><strong>Expiry Date:</strong> {new Date(product.expiryDate).toLocaleDateString()}</p>
                    <p><strong>Offer:</strong> {product.offer}</p>
                    <p><strong>Discount Type:</strong> {product.discountType}</p>
                    <p><strong>Sell Date:</strong> {new Date(product.sellDate).toLocaleString()}</p>
                    <div className="bg-white shadow-lg p-8 rounded-lg mt-8">
                        <h2 className="text-xl font-semibold mb-4">Terms and Conditions</h2>
                        <p>By using this coupon, you agree to the following terms and conditions:</p>
                        <ol className="list-decimal ml-8">
                            <li>This coupon is valid until the expiry date mentioned above.</li>
                            <li>The discount offered is applicable only on products or services specified by the company.</li>
                            <li>The coupon code must be entered correctly at the time of purchase to avail the discount.</li>
                            <li>This coupon cannot be combined with any other offer or promotion.</li>
                            <li>The minimum purchase amount required to use this coupon is ${product.minPrice}.</li>
                            <li>This coupon is non-transferable and cannot be redeemed for cash.</li>
                            <li>Company reserves the right to modify or withdraw this offer at any time without prior notice.</li>
                        </ol>
                        <p>Please read and understand the terms and conditions carefully before using the coupon.</p>
                    </div>
                </div>


                <div className=" bg-white shadow-md p-8 rounded-lg mt-8 sm:col-span-1">
                    <h2 className="text-xl font-semibold mb-4">Additional Information</h2>
                    <p><strong>Buy Value:</strong> 200</p>
                    <p><strong>Sale Value:</strong> 300</p>
                    <p><strong>Subscription:</strong> Get 10% of profit on transaction. Subscribe at $100/month</p>
                    <div className="bg-white shadow-md p-8 rounded-lg w-full mt-4">
                        <h2 className="text-xl font-semibold mb-4">Purchase Options</h2>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4 w-full">Comming soon</button>
                        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full">Add to Cart</button>
                    </div>
                </div>



            </div>

        


        </div>
    );
};

export default ProductDescription;
