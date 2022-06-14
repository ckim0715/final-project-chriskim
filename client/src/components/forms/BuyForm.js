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

        <div id="buy-form-container">
        <form onSubmit={buySubmit}>
            <div id="buyform-cc-text">
            <label><u>Credit Card</u>
                <input id="buy-cc-input" type="tel" maxlength="19" placeholder="Card Number"></input>
                <br></br>
                <input id="buy-mm-cc" className="cc-exp" type ="tel" maxlength= "2" placeholder="MM"></input>/
                <input id="buy-yy-cc" className="cc-exp" type ="tel" maxlength= "2"  placeholder="YY"></input>
                <input type="tel" maxlength="3" id="buy-cc-cvv" placeholder="CVV"></input>
            </label>
            </div>
            <div id="buyform-billing-text">
            <label><u>Billing Information</u>
                <br></br>
                <input id="buy-firstname"type="text" placeholder="First Name"></input>
                <input id="buy-lastname" type="text" placeholder="Last Name"></input>
                <input id="buy-address" type="text" placeholder="Billing Address"></input>
                <input id="buy-city" type="text" placeholder="City"></input>
                <br></br>
                <input id="buy-state" type="text" placeholder="State"></input>
                <input id="buy-zip" type="tel" maxlength="5" placeholder="Zipcode" pattern="[0-9]{5}" title="Five digit zip code"></input>
                </label>
                </div>
                <button className="cc-submit-btn" type="submit">Submit Credit Card</button>

        </form>
        </div>

    )
}

export default BuyForm