import React, { useState, useEffect } from "react";

function BidForm ({productObj, setProductObj, updateCurrentBid}) {

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
                    r.json().then((bid)=> updateCurrentBid(bid));
                } else {
                    r.json().then((err) => console.log(err.errors))
                }
            });

            
           
          } else {alert("Bid must be higher than starting and current bids.")}

      }


    return (
        <div id="bid-form-container">
        <form onSubmit={(e) => bidSubmit(e)}>
            <div id="bid-input-container">
            <label>$
                <input id="bid-input" type="number" placeholder="Enter Bid" name="amount" step="1" onChange={(e) => updateBid(e)}></input>
            </label>
            </div>
            <div id="bidform-cc-text">
            <label><u>Credit Card</u>
            <br></br>
                <input id="bid-cc-input" type="tel" maxlength="19" placeholder="Card Number"></input>
                <br></br>
                <input id="bid-mm-cc" className="cc-exp" type ="tel" maxlength= "2" placeholder="MM"></input>/
                
                <input id="bid-yy-cc" className="cc-exp" type ="tel" maxlength= "2"  placeholder="YY"></input>
                <input  type="tel" maxlength="3" id="bid-cc-cvv" placeholder="CVV"></input>
            </label>
            </div>
            <div id="bidform-billing-text">
            <label><u>Billing Information</u>
                <br></br>
                <input id="bid-firstname" type="text" placeholder="First Name"></input>
                <input id="bid-lastname" type="text" placeholder="Last Name"></input>
                <input id="bid-address" type="text" placeholder="Billing Address"></input>
                <input id="bid-city" type="text" placeholder="City"></input>
                <br></br>
                <input id="bid-state" type="text" placeholder="State"></input>
                <input id="bid-zip" type="tel" maxlength="5" placeholder="Zipcode" pattern="[0-9]{5}" title="Five digit zip code"></input>
                </label>
                </div>

                <button className="cc-submit-btn" type="submit">Submit Credit Card</button>

            

        </form>
        </div>
    )
}

export default BidForm