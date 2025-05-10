import React, { useState } from 'react';
import './items.css';

export default function Product({ store }) {

    const item = JSON.parse(localStorage.getItem("element"));
    var cl = JSON.parse(localStorage.getItem("cl"));

    // Function to handle adding product to the cart
    function addProduct() {
        var c = 0;
        cl.push({ "item": item, "qty": 1 }); // Adding product with quantity of 1
        localStorage.setItem("cl", JSON.stringify(cl));

        // Recalculating total quantity in the cart
        cl.map((element) => {
            c = c + element.qty;
        });
        localStorage.setItem("count", c);

        // Redirecting to the Product page after adding the product
        store.dispatch({ "type": "page", "data": "Product" });
    }

    return (
        <div className='product-page'>

            {/* Heading */}
            <h2 className="service-heading">Service </h2>

            {/* First Div: Product Details */}
            <div className='product-details' style={{ display: "flex", justifyContent: "space-around", marginTop: '20px' }}>
                {/* Product Image */}
                <div className='flex-1'>
                    <img src={item.pimage} alt="Product" width={300} height={300} />
                </div>

                {/* Product Info */}
                <div className='flex-2' style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <p><strong>{item.pname}</strong></p>
                    <p>{item.pdescription}</p>
                    <p><strong>Price: Rs. {item.pcost}</strong></p>
                    <button onClick={addProduct} style={{ backgroundColor: "yellowgreen", borderRadius: "10px", padding: "10px", marginTop: "20px" }}>Add Now</button>
                </div>
            </div>

            {/* Google Map Section */}
            <div className="product-location" style={{ marginTop: "40px", textAlign: "center" }}>
                <h3>Service Location</h3>
                <iframe
                    title="service-location"
                    width="600"
                    height="450"
                    style={{ border: 0, borderRadius: "12px", marginTop: "10px" }}
                    loading="lazy"
                    allowFullScreen
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyC4AFj3eDSaiKnB63ijx2LufH1y52j2soY&q=12.9716,77.5946`}
                />
            </div>

            {/* Second Div: Reviews */}
            <div className='product-reviews' style={{ marginTop: "30px" }}>
                <h3>Customer Reviews</h3>
                <div className='review-list'>
                    {/* Example static reviews */}
                    <div className='review'>
                        <p><strong>John Doe:</strong> This product is amazing! It helped me a lot!</p>
                    </div>
                    <div className='review'>
                        <p><strong>Jane Smith:</strong> Good value for money. Highly recommend!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
