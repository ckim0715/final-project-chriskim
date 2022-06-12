import React, { useState } from "react";

function BuyForm ({productObj, handleDeleteProduct, setToggleModal}) {

    function buySubmit () {
        fetch(`product/${productObj.id}`, {
            method:"DELETE"
        })
        .then((r) => r.json())
        .then((deletedProduct) => handleDeleteProduct(deletedProduct))
        setToggleModal(false)

    }
    return (
        <form onSubmit={buySubmit}>
            
            <label>Credit Card
                <input type="number" placeholder="Card Number"></input>
                <input type="date" placeholder="Expiration Date"></input>
                <input type="number" placeholder="CVV"></input>
            </label>
            <label>Billing Info
                <input type="text" placeholder="First Name"></input>
                <input type="text" placeholder="Last Name"></input>
                <input type="text" placeholder="Billing Address"></input>
                <input type="text" placeholder="City"></input>
                <input type="text" placeholder="State"></input>
                <input type="text" placeholder="Zipcode" pattern="[0-9]{5}" title="Five digit zip code"></input>
                </label>
                <button type="submit">Submit</button>

        </form>

    )
}

export default BuyForm