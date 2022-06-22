import React, { useState, useEffect } from "react";

function ProductDisplay({product, setToggleModal, setProductObj, productObj}){

    function maxBid(){
        if (product.bids.length > 0) {return  Math.max(...product.bids.map(bid => bid.amount))} else {return 0} 
    }
    

    function handleOpenModal() {
        setToggleModal(true)
        setProductObj({
            part_type: product.part_type,
            brand: product.brand,
            starting_bid: product.starting_bid,
            buy_price: product.buy_price,
            model: product.model,
            product_image: product.product_image.url,
            message: product.message,
            current_bid: maxBid(),
            id: product.id

        })
        
        
     
    }
    

    return (

        <div className="product-container open-modal" onClick={handleOpenModal}>
            <div id="product-image-container">
        <img className="display-image" src={product.product_image.url}></img>
        </div>
        <div id="product-display-text-container">
        <p id="product-brand">{product.brand}</p>
        <p id= "product-model">{product.model}</p>
        <div id="starting-bid-text-container">
        <span id= 'starting-bid-text'>Starting Bid:</span><span id="starting-bid-number"> ${parseFloat(product.starting_bid)}</span>
        
        </div>
        
        <div id="buy-now-text-container">
        <span id="buy-now-text">Buy Now:</span> <span id="buy-now-number">${parseFloat(product.buy_price)}</span>
        </div>
        </div>
        
        

        </div>

    )
}

export default ProductDisplay