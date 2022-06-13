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
        <div>
        <h1>{currentUser.name}</h1>
        <p>Email Address</p>
        <p> {currentUser.email}</p>
        <p>Phone Number</p>
        <p> {currentUser.phone_number}</p>
        <p>Billing Address</p>
        <p> {currentUser.address}</p>

        <div>
        {showBidTable? <button onClick={()=>setShowBidTable(false)}>Hide Bids</button> : <button onClick={viewBids}>View Bids</button>}
        </div>
        <div>
        {showProductTable? <button onClick={()=>setShowProductTable(false)}>Hide Listings</button> : <button onClick={viewProducts}>View Listings</button>}
        </div>
        {showBidTable? <BidTable bidArray={bidArray} setBidArray={setBidArray} handleDeleteBid={handleDeleteBid} /> : null}
        {showProductTable? <ProductTable productArray={productArray} setProductArray={setProductArray} handleDeleteProduct={handleDeleteProduct} /> : null}
        </div>
    )
}

export default Account