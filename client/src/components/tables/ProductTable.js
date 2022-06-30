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
            {productArray.map(product => {
                return <table id="product-table" key={product.id}>
                    <thead>
                    <tr>
                        <th></th>
                        <th id="product-table-type-th">Type</th>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Current Bid</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr id="listing-table-row">
                        <td className="product-table-row"><img className="table-image" src={product.product_image.url} alt="Product"></img></td>
                        <td id="product-table-type" className="product-table-row">{product.part_type}</td>
                        <td className="product-table-row">{product.brand}</td>
                        <td className="product-table-row">{product.model}</td>
                        <td className="product-table-row">{product.bids.length? `$${parseFloat(Math.max(...product.bids.map(bid => bid.amount)))}` : "No Bids"}</td>
                        <td ><button id="accept-bid-btn" onClick={() => cancelProduct(product)}>Accept Bid</button></td>
                        <td ><button id="remove-listing-btn" onClick={() => cancelProduct(product)}>Remove Listing</button></td>
                        </tr>
                    </tbody>
                </table>
            })}
             {/* <table id="product-table">
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
                    return <tr id="listing-table-row" key={product.id}>
                        <td className="product-table-row"><img className="table-image" src={product.product_image.url} alt="Product"></img></td>
                        <td className="product-table-row">{product.part_type}</td>
                        <td className="product-table-row">{product.brand}</td>
                        <td className="product-table-row">{product.model}</td>
                        <td className="product-table-row">{product.bids.length? `$${parseFloat(Math.max(...product.bids.map(bid => bid.amount)))}` : "No Bids"}</td>
                        <td className="product-table-row"><button id="accept-bid-btn" onClick={() => cancelProduct(product)}>Accept Bid</button></td>
                        <td className="product-table-row"><button id="remove-listing-btn" onClick={() => cancelProduct(product)}>Remove Listing</button></td>
                        
                    </tr>
                })}
            </table>
            {console.log(productArray)} */}
        </div>

    )
}

export default ProductTable