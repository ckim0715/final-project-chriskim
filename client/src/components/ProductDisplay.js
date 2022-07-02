import React, { useState, useEffect } from "react";

function ProductDisplay({product, setToggleModal, setProductObj, productObj}){

    function maxBid(newProductData){
        if (newProductData.bids.length > 0) {return  Math.max(...newProductData.bids.map(bid => bid.amount))} else {return 0} 
    }
    

    function handleOpenModal(product) {
        fetch(`/product/${product.id}`)
        .then((r) => r.json())
        .then((newProductData) => setProductObj({
            part_type: newProductData.part_type,
            brand: newProductData.brand,
            starting_bid: newProductData.starting_bid,
            buy_price: newProductData.buy_price,
            model: newProductData.model,
            product_image: newProductData.image_url,
            message: newProductData.message,
            current_bid: maxBid(newProductData),
            id: newProductData.id

        }))
        setToggleModal(true);
        console.log(productObj)   
        
        
        
        
     
    }
    

    return (

        <div className="product-container open-modal" onClick={ () => handleOpenModal(product)}>
            <div id="product-image-container">
        <img className="display-image" src={product.image_url}></img>
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