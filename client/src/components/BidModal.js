import React, { useState, useEffect } from "react";
import BidForm from "./forms/BidForm";
import BuyForm from "./forms/BuyForm";


function BidModal ({setToggleModal, productObj, setProductObj, handleDeleteProduct}){

    const [showBidForm, setShowBidForm] = useState(false)
    const [showBuyForm, setShowBuyForm] = useState(false)

    function bidToggle () {
        setShowBuyForm(false)
        setShowBidForm(true)
        

    }

    function buyToggle () {
        setShowBidForm(false)
        setShowBuyForm(true)

    }

   
    return (
        <div className="modal-background">
            <div className="modal-container">
                <div className="modal-close-btn">
                <button onClick={() => setToggleModal(false)}> X </button>
                </div>
            <div className="body"></div>
            <img id="modal-image" src= {productObj.image_url} alt="Image of Product"></img>
            <p className="modal-text">{productObj.brand}</p>
            <p className="modal-text">{productObj.model}</p>
            <p className="modal-text">Starting Bid: ${productObj.starting_bid}</p>
            <p className="modal-text">Current Bid: {productObj.current_bid ? `$${productObj.current_bid}` : "No Bids"}</p>
            <p className="modal-text">Buy Now: ${productObj.buy_price}</p>
            <p className="modal-text">{productObj.message}</p>
            <button onClick={bidToggle}>Place Bid</button>
            <button onClick={buyToggle}>Buy Now</button>

            {showBidForm? <BidForm setProductObj={setProductObj} productObj={productObj}  /> : null}
            {showBuyForm? <BuyForm setToggleModal={setToggleModal} setProductObj={setProductObj} productObj={productObj} handleDeleteProduct={handleDeleteProduct}  /> : null}

            </div>
        </div>
    )
}

export default BidModal;