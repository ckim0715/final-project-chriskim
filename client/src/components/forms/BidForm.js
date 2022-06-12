import React, { useState, useEffect } from "react";

function BidForm ({productObj, setProductObj}) {

    const [bidObj, setBidObj] = useState ({

        product_id: productObj.id,
        user_id: NaN,
        amount: NaN,

        })

    useEffect(() => {
        fetch("/me").then((response) => {
          if (response.ok) {
            response.json().then((user) => setBidObj({...bidObj, user_id: user.id}));
          }
        });
      }, []);

      function updateBid (e) {
          setBidObj({...bidObj, [e.target.name]: e.target.value})
      }

      function bidSubmit(e) {
          e.preventDefault();
          if (e.target.amount.value > productObj.current_bid && e.target.amount.value > productObj.starting_bid  ){
            fetch("/bid", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(bidObj)
            }).then ((r)=> {
                if (r.ok) {
                    r.json().then((bid)=> setProductObj({...productObj, current_bid: bid.amount}));
                } else {
                    r.json().then((err) => console.log(err.errors))
                }
            });

            
           
          } else {alert("Bid must be higher than starting and current bids.")}

      }


    return (
        <form onSubmit={(e) => bidSubmit(e)}>
            <label>$
                <input type="number" placeholder="Enter Bid" name="amount" onChange={(e) => updateBid(e)}></input>
            </label>
            
            <label>Credit Card
                <input type="number" placeholder="Card Number"></input>
                <input type="date" placeholder="Expiration Date"></input>
                <input type="number" placeholder="CVV"></input>
            </label>
            <label>Billing Info
                <input type="text" placeholder="First Name"></input>
                <input type="text" placeholder="Last Name"></input>
                <input type="text" placeholder="Billing Address"></input>
                <input type="text" placeholder="City"></input>
                <input type="text" placeholder="State"></input>
                <input type="text" placeholder="Zipcode" pattern="[0-9]{5}" title="Five digit zip code"></input>
                </label>

                <button type="submit">Submit</button>

            

        </form>

    )
}

export default BidForm