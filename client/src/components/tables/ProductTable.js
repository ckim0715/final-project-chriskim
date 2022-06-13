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
        <div>
             <table>
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
                        <td><img className="table-image" src={product.image_url} alt="Product"></img></td>
                        <td>{product.part_type}</td>
                        <td>{product.brand}</td>
                        <td>{product.model}</td>
                        <td>{product.bids.length? `$${Math.max(...product.bids.map(bid => bid.amount))}` : "No Bids"}</td>
                        <td><button onClick={() => cancelProduct(product)}>Remove Listing</button></td>

                    </tr>
                })}
            </table>
            {console.log(productArray)}
        </div>

    )
}

export default ProductTable