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
        <p id="product-brand">{product.brand}</p>
        <p id= "product-model">{product.model}</p>
        <p id= 'starting_bid'>Starting Bid: ${parseFloat(product.starting_bid)}</p>
        <p id="buy-now">Buy Now: ${parseFloat(product.buy_price)}</p>
        
        

        </div>

    )
}

export default ProductDisplay