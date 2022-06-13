import React, { useState } from "react";

function BidTable ({bidArray, handleDeleteBid}) {

    function cancelBid(bid) {
        fetch(`bid/${bid.id}`, {
            method:"DELETE"
        })
        .then((r) => r.json())
        .then((deletedBid) => handleDeleteBid(deletedBid))

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
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
                {bidArray.map(bid => {
                    return <tr key={bid.id}>
                        <td><img className="table-image" src={bid.product.image_url} alt="Product Image"></img></td>
                        <td>{bid.product.part_type}</td>
                        <td>{bid.product.brand}</td>
                        <td>{bid.product.model}</td>
                        <td>${bid.amount}</td>
                        <td><button onClick={() => cancelBid(bid)}>Cancel Bid</button></td>

                    </tr>
                })}
            </table>
        </div>

    )
}

export default BidTable