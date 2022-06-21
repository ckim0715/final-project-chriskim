import React, { useState } from "react";

function ProductTable({productArray, setProductArray, handleDeleteProduct}) {

    function cancelProduct(product) {
        fetch(`product/${product.id}`, {
            method:"DELETE"
        })
        .then((r) => r.json())
        .then((deletedProduct) => handleDeleteProduct(deletedProduct))

    }
    return ( 
        <div id="product-table-container">
             <table id="product-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Type</th>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Current Bid</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
                {productArray.map(product => {
                    return <tr key={product.id}>
                        <td className="product-table-row"><img className="table-image" src={product.image_url} alt="Product"></img></td>
                        <td className="product-table-row">{product.part_type}</td>
                        <td className="product-table-row">{product.brand}</td>
                        <td className="product-table-row">{product.model}</td>
                        <td className="product-table-row">{product.bids.length? `$${Math.max(...product.bids.map(bid => bid.amount))}` : "No Bids"}</td>
                        <td className="product-table-row"><button id="accept-bid-btn" onClick={() => cancelProduct(product)}>Accept Bid</button></td>
                        <td className="product-table-row"><button id="remove-listing-btn" onClick={() => cancelProduct(product)}>Remove Listing</button></td>
                        
                    </tr>
                })}
            </table>
            {console.log(productArray)}
        </div>

    )
}

export default ProductTable