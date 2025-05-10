import React from 'react'
import './items.css'

export default function Cartpage({ store }) {

    // Get the cart data from localStorage
    var cl = JSON.parse(localStorage.getItem("cl")) || []  // Provide a default empty array if it's null

    function Amount() {
        var c = 0;
        // Ensure cl is an array before calling map
        cl.map((element) => {
            c = c + (element.item.pcost * element.qty)
        })
        return (
            <span>
                {c}
            </span>
        )
    }

    function billing() {
        store.dispatch({ "type": "page", "data": "Billing" })
    }

    return (
        <div className='card-parent'>
            <div className='card' style={{ width: "auto", padding: "40px" }}>
                <table border={1} style={{ height: "auto" }}>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Unit Price</th>
                            <th>Product Qty</th>
                            <th>Product Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Render cart items */}
                        {cl.map((element, index) => {
                            return (
                                <tr key={index}>
                                    <td>{element.item.pname}</td>
                                    <td>{element.item.pcost}</td>
                                    <td>{element.qty}</td>
                                    <td className='card-price'>{element.item.pcost * element.qty}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <br /><br />
                Total Amount to Pay:
                <Amount />
                <br /><br />
                <button onClick={billing} style={{ backgroundColor: "yellowgreen" }}> Proceed to Pay </button>
            </div>
        </div>
    )
}
