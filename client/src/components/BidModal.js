import React, { useState, useEffect } from "react";
import BidForm from "./forms/BidForm";
import BuyForm from "./forms/BuyForm";


function BidModal ({setToggleModal, productObj, setProductObj, handleDeleteProduct, updateCurrentBid}){

    const [showBidForm, setShowBidForm] = useState(true)
    const [showBuyForm, setShowBuyForm] = useState(false)

    function bidToggle () {
        setShowBuyForm(false)
        setShowBidForm(true)
        

    }

    function buyToggle () {
        setShowBidForm(false)
        setShowBuyForm(true)

    }

    function closeBidModal(){
        setToggleModal(false);
        
    }
   
    return (
        <div className="modal-background">
            <div className="modal-container">
                <div className="modal-close-btn">
                <button onClick={() => setToggleModal(false)}> X </button>
                </div>
                        
            <img id="modal-image" src= {productObj.product_image} alt="Image of Product"></img>
            <div id="modal-text-container">
            <p id ="modal-brand-text" className="modal-text"><strong>{productObj.brand}</strong></p>
            <p className="modal-text"><strong>{productObj.model}</strong></p>
            <p className="modal-text"><u>Starting Bid</u>: <br></br><strong>${parseFloat(productObj.starting_bid)}</strong></p>
            <p className="modal-text"><u>Current Bid</u>: <br></br>{parseFloat(productObj.current_bid) ? <strong>${parseFloat(productObj.current_bid)}</strong> : <strong>No Bids</strong>}</p>
            <p className="modal-text"><u>Buy Now</u>: <br></br><strong>${parseFloat(productObj.buy_price)}</strong></p>
            </div>
            <div id="modal-description">
               
            <p id="modal-message">{productObj.message}</p>
            </div>
            <div id="modal-btn-container">
            <button id="bid-button" autoFocus onClick={bidToggle}>Place Bid</button>
            
            
            <button id="buy-button" onClick={buyToggle}>Buy Now</button>
            </div>

            {showBidForm? <BidForm setProductObj={setProductObj} productObj={productObj} updateCurrentBid={updateCurrentBid}  /> : null}
            {showBuyForm? <BuyForm setToggleModal={setToggleModal} setProductObj={setProductObj} productObj={productObj} handleDeleteProduct={handleDeleteProduct} updateCurrentBid={updateCurrentBid} /> : null}

            </div>
        </div>
    )
}

export default BidModal;