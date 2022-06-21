import React, { useState, useEffect } from "react";
import BidTable from "./tables/BidTable";
import ProductTable from "./tables/ProductTable";

function Account({user, setUser}) {

    const [bidArray, setBidArray] = useState([])
    const [productArray, setProductArray] = useState([])
    const [showBidTable, setShowBidTable] = useState(false)
    const [showProductTable, setShowProductTable] = useState(false)
    const [currentUser, setCurrentUser] = useState({})
    

    useEffect(() => {
        fetch("/me").then((response) => {
          if (response.ok) {
            response.json().then((user) => setCurrentUser(user));
          }
        });
      }, []);

    function viewBids() {
        fetch('/bid')
        .then((r) => r.json())
        .then((bidData) => setBidArray(bidData));
        setShowProductTable(false)
        setShowBidTable(true)
    }

    function viewProducts() {
        fetch('/product')
        .then((r) => r.json())
        .then((productData) => setProductArray(productData));
        setShowBidTable(false)
        setShowProductTable(true)

    }

    function handleDeleteBid(deletedBid) {
        let newBidArray = bidArray.filter((bid) => bid.id !== deletedBid.id)
        setBidArray(newBidArray)

    }

    function handleDeleteProduct (deletedProduct) {
        let newProductArray = productArray.filter((product) => product.id !== deletedProduct.id)
        setProductArray(newProductArray)

    }

    return (
        <div id="accountpage-wrapper">
        <div id="profile-container">
        <h1 id="account-name-text">{currentUser.name}</h1>
        <p className="account-text-desc"><strong>Email Address</strong></p>
        <p id="account-email-text"> {currentUser.email}</p>
        <p className="account-text-desc"><strong>Phone Number</strong></p>
        <p id="account-ph-text"> {currentUser.phone_number}</p>
        <p className="account-text-desc"><strong>Billing Address</strong></p>
        <p id="account-address-text"> {currentUser.address}</p>
        <div id="account-btn-container">
        {showBidTable? <button className="account-bid-btn" onClick={()=>setShowBidTable(false)}>Hide Bids</button> : <button className="account-bid-btn" onClick={viewBids}>View Bids</button>}
        {showProductTable? <button className="account-listing-btn" onClick={()=>setShowProductTable(false)}>Hide Listings</button> : <button className="account-listing-btn" onClick={viewProducts}>View Listings</button>}
        </div>
        </div>

       
        {showBidTable? <BidTable bidArray={bidArray} setBidArray={setBidArray} handleDeleteBid={handleDeleteBid} /> : null}
        {showProductTable? <ProductTable productArray={productArray} setProductArray={setProductArray} handleDeleteProduct={handleDeleteProduct} /> : null}
        </div>
    )
}

export default Account