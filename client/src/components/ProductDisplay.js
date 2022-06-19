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
            image_url: product.image_url,
            message: product.message,
            current_bid: maxBid(),
            id: product.id

        })
        
        
     
    }
    

    return (

        <div className="product-container open-modal" onClick={handleOpenModal}>
            <div id="product-image-container">
        <img className="display-image" src={product.image_url}></img>
        </div>
        <p id="product-brand">{productObj.brand}</p>
        <p id= "product-model">{product.model}</p>
        <p id= 'starting_bid'>Starting Bid: ${product.starting_bid}</p>
        <p id="current-bid">Current Bid: {maxBid()? `$${maxBid()}` : <em>No Bids</em>}</p>
        <p id="buy-now">Buy Now: ${product.buy_price}</p>
        
        

        </div>

    )
}

export default ProductDisplay