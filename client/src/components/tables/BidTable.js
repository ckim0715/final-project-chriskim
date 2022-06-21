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
        <div id="bid-table-container">
            <table id="bid-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Type</th>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Bid Amt.</th>
                    </tr>
                </thead>
                <tbody>

                
                {bidArray.map(bid => {
                    return <tr key={bid.id}>
                        <td id="bid-table-image-row" className = "bid-table-row"><img className="table-image" src={bid.product.product_image.url} alt="Product Image"></img></td>
                        <td  className="bid-table-row" id="bid-table-type">{bid.product.part_type}</td>
                        <td className="bid-table-row">{bid.product.brand}</td>
                        <td className="bid-table-row">{bid.product.model}</td>
                        <td className="bid-table-row" id="bid-amount-row">${parseFloat(bid.amount)}</td>
                        <td className="bid-table-row"id="bid-table-btn-row"><button id="bid-table-btn" onClick={() => cancelBid(bid)}>Cancel Bid</button></td>

                    </tr>
                    
                })}</tbody>
            </table>
        </div>

    )
}

export default BidTable