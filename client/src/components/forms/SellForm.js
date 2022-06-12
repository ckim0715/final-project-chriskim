import React, { useState, useEffect } from "react";


function SellForm () {

    const [product, setProduct] = useState({
        part_type: "",
        brand: "",
        model: "",
        starting_bid: NaN,
        buy_price: NaN,
        user_id: NaN,
        image_url: "",
        message: "",
        })

        useEffect(() => {
            fetch("/me").then((response) => {
              if (response.ok) {
                response.json().then((user) => setProduct({...product, user_id: user.id}));
              }
            });
          }, []);


    function handleSubmitForm(e){
        e.preventDefault();
        
        fetch("/product", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        }).then ((r)=> {
            if (r.ok) {
                r.json().then ((product)=> console.log(product));
            } else {
                r.json().then((err) => console.log(err.errors))
            }
        });
        e.target.reset();


    }

    function handleSetForm(e) {
        setProduct({...product, [e.target.name]: e.target.value})
        
 
     }
    
    return (
        <div>
        {console.log(product)}
        <form onSubmit={(e) => handleSubmitForm(e)}>
            <label>
            <select defaultValue={"Default"} name="part_type" onChange={(e) =>handleSetForm(e)}>
                <option value="Default" disabled>Select Part Type</option>
                <option>PC</option>
                <option>Motherboard</option>
                <option>CPU</option>
                <option>GPU</option>
                <option>Memory</option>
                <option>Storage</option>
                <option>Power Supply</option>
                <option>Other</option>
            </select>    
            </label>

            <label>Brand:
                <input
                type= "text" 
                name= "brand"
                autoComplete= "off"
                onChange={(e) =>handleSetForm(e)}
                />
            </label>

            <label>Model:
                <input
                type= "text" 
                name= "model"
                autoComplete= "off"
                onChange={(e) =>handleSetForm(e)}
                />
            </label>

            <label>Image:
                <input
                type= "text" 
                name= "image_url"
                autoComplete= "off"
                onChange={(e) =>handleSetForm(e)}
                />
            </label>

            <label>Starting Bid:
                <input
                step="0.01"
                type= "number" 
                name= "starting_bid"
                autoComplete= "off"
                onChange={(e) =>handleSetForm(e)}
                />
            </label>

            <label>Buy Price:
                <input
                step="0.01"
                type= "number" 
                name= "buy_price"
                autoComplete= "off"
                onChange={(e) =>handleSetForm(e)}
                />
            </label>

            <label>Description:
                <textarea
                name= "message"
                autoComplete= "off"
                onChange={(e) =>handleSetForm(e)}
                />
            </label>

            <button type="submit">Submit</button>
        </form>
        </div>

        
    )
}

export default SellForm