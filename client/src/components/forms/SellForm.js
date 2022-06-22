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
        product_image: null,
        })

        const [showImage, setShowImage] = useState(false)
        const [imageURL, setImageURL] = useState("")

        

        useEffect(() => {
            fetch("/me").then((response) => {
              if (response.ok) {
                response.json().then((user) => setProduct({...product, user_id: user.id}));
              }
            });
          }, []);

          function handleErrors(errors){
            console.log(errors)
          }




    function handleSubmitForm(e){
        e.preventDefault();
        let formData = new FormData();

        formData.append('part_type', product.part_type);
        formData.append('brand', product.brand);
        formData.append('model', product.model);
        formData.append('starting_bid', product.starting_bid);
        formData.append('buy_price', product.buy_price);
        formData.append('user_id', product.user_id);
        formData.append('message', product.message);
        formData.append('product_image', product.product_image);


        
        fetch("/product", {
            method: "POST",
            body: formData,
        }).then ((r)=> {
            if (r.ok) {
                r.json().then ((product)=> console.log(product));
            } else {
                r.json().then((err) => handleErrors(err.errors))
            }
        });
        e.target.reset();
        setShowImage(false);
        


    }

    function handleSetForm(e) {
        setProduct({...product, [e.target.name]: e.target.value})
        
 
     }

     function handleSetImage(e) {
        setProduct({...product, [e.target.name]: e.target.files[0]});
        let newImageURL = (URL.createObjectURL(e.target.files[0]));
        setImageURL(newImageURL);
        setShowImage(true);
        console.log(imageURL)
        
 
     }
    
    return (
        <div id="sellform-container">
        {console.log(product)}
        <form id ="sellform" onSubmit={(e) => handleSubmitForm(e)}>
            <div id="type-selector-container">
            <label>
            <select id="type-selector" defaultValue={"Default"} name="part_type" onChange={(e) =>handleSetForm(e)}>
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
            </div>
        
            <div id="brand-container">
            <p>Brand:</p>
                <input id="brand-input"
                type= "text" 
                name= "brand"
                placeholder="Enter Brand"
                autoComplete= "off"
                onChange={(e) =>handleSetForm(e)}
                />
            
            </div>
            <div id="model-container">
            <p>Model:</p>
                <input
                id="model-input"
                type= "text" 
                name= "model"
                placeholder="Enter Model"
                autoComplete= "off"
                onChange={(e) =>handleSetForm(e)}
                />
            </div>
            <div id="sellform-previewimg-container">

               {showImage? <img id="sellform-image" src={imageURL}></img> : null}

            </div>
            <div id="sellform-image-container">
            <p>Image:</p>
                <input
                id="sellform-image-input"
                type= "file" 
                name= "product_image"
                accept= "image/*"
                onChange={(e) =>handleSetImage(e)}
                />
                </div>
            
            <div id="sellform-startingbid-container">
            <label>Starting Bid:
                $<input
                id="sellform-starting-bid"
                min="1"
                step="1"
                type= "number" 
                name= "starting_bid"
                autoComplete= "off"
                onChange={(e) =>handleSetForm(e)}
                />
            </label>
            </div>
            <div id="sellform-buy-container">
            <label>Buy Price:
                $<input
                id="sellform-buy"
                min="1"
                step="1"
                type= "number" 
                name= "buy_price"
                autoComplete= "off"
                onChange={(e) =>handleSetForm(e)}
                />
            </label>
            </div>
            <div id="sellform-desc-container">
            <p>Description:</p>
                <textarea
                id="sellform-desc-input"
                placeholder="Enter Product Description"
                name= "message"
                autoComplete= "off"
                onChange={(e) =>handleSetForm(e)}
                />
           
            </div>

            

            <button id="sellform-btn" type="submit">Submit</button>
        </form>
        </div>

        
    )
}

export default SellForm