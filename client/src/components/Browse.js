import React, { useState, useEffect } from "react";
import BidModal from "./BidModal";
import ProductDisplay from "./ProductDisplay";

function Browse({user}) {

    const [productDisplay, setProductDisplay] = useState([])
    const [toggleModal, setToggleModal] = useState(false)
    const [productObj, setProductObj] = useState({})

    function fetchPc(){
        fetch('/product/pc')
        .then((r) => r.json())
        .then((pcData) => setProductDisplay(pcData))
    }

    function fetchMotherboard(){
        fetch('/product/motherboard')
        .then((r) => r.json())
        .then((motherboardData) => setProductDisplay(motherboardData))
    }

    function fetchCPU(){
        fetch('/product/cpu')
        .then((r) => r.json())
        .then((cpuData) => setProductDisplay(cpuData))
    }

    function fetchGPU(){
        fetch('/product/gpu')
        .then((r) => r.json())
        .then((gpuData) => setProductDisplay(gpuData))
    }

    function fetchMemory(){
        fetch('/product/memory')
        .then((r) => r.json())
        .then((memoryData) => setProductDisplay(memoryData))
    }

    function fetchStorage(){
        fetch('/product/storage')
        .then((r) => r.json())
        .then((storageData) => setProductDisplay(storageData))
    }

    function fetchPowerSupply(){
        fetch('/product/powersupply')
        .then((r) => r.json())
        .then((powerSupplyData) => setProductDisplay(powerSupplyData))
    }

    function fetchOther(){
        fetch('/product/other')
        .then((r) => r.json())
        .then((otherData) => setProductDisplay(otherData))
    }

    function handleDeleteProduct (deletedProduct) {
        const newProductArray = productDisplay.filter ((product) => product.id !== deletedProduct.id)
        setProductDisplay(newProductArray)



    }

    function updateCurrentBid(bid){
        setProductObj({...productObj, current_bid: bid.amount})
    }

    function handleSearch (e){
        if (e.target.search_term.value){
        e.preventDefault();
        fetch(`/product/search/${e.target.search_term.value}`)
        .then((r) => r.json())
        .then((searchData) => setProductDisplay(searchData))
        } else {
            alert("TYPE SOMETHING IN BUDDY!")
        }
        

        
    }

    function compareValues(key, order ="asc"){
        return function innerSort(a,b) {
            if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)){
                return 0
            }

            const varA = (typeof a[key] === 'string')
            ? a[key].toUpperCase() : a[key];
            const varB = (typeof b[key] === 'string')
            ? b[key].toUpperCase() : b[key];

            let comparison = 0;
            if (varA > varB) {
                comparison = 1;
            } else if (varA < varB) {
                comparison = -1;
            }

            return (
                (order === 'desc') ? (comparison * -1) : comparison
            )
        }
    }

    function handleFilter (e) {
        switch (e.target.value) {

            case "Sort By: Brand":
                setProductDisplay([...productDisplay.sort(compareValues('brand'))]);
                console.log(productDisplay.sort(compareValues('brand')));
                break;
            
            case "Sort By: Model":
                setProductDisplay([...productDisplay.sort(compareValues('model'))]);
                console.log(productDisplay.sort(compareValues('model')));
                break;

            case "Sort By: Lowest Buy Price":
                setProductDisplay([...productDisplay.sort(compareValues('buy_price'))]);
                console.log(productDisplay.sort(compareValues('buy_price')));
                break;
        }

        
            

    }


    

    

    return (
        <>
        <div id="products-container-wrapper">
        <div id="links-container">
        <a href="#" onClick={fetchPc}>PCs</a>
        <a href="#" onClick={fetchMotherboard}>Motherboards</a>
        <a href="#" onClick={fetchCPU}>CPU</a>
        <a href="#" onClick={fetchGPU}>GPU</a>
        <a href="#" onClick={fetchMemory}>Memory</a>
        <a href="#" onClick={fetchStorage}>Storage</a>
        <a href="#" onClick={fetchPowerSupply}>Power Supply</a>
        <a href="#" onClick={fetchOther}>Other</a>
        </div>
        
        <div id="search-bar-container">
            <form onSubmit={(e) => handleSearch(e)}>
            <input
            autoComplete="off"
            id="search-bar"
            type="search"
            name="search_term"
            placeholder="Enter brand, model, description, etc..."
            width="800px">
            </input>

            <button id="search-btn" type="submit">Search</button>
            </form>
        </div>

        <div id="filter-container">
            <select id='product-filter' onChange={(e) => handleFilter(e)}>
                <option>Sort By: Brand</option>
                <option>Sort By: Model</option>
            </select>
        </div>

        <div id="products-display" >
       {productDisplay.map((product) =>
          <ProductDisplay productObj={productObj} setProductObj={setProductObj} setToggleModal ={setToggleModal} key={product.id} product={product} />)
       }
        </div>

        {toggleModal && <BidModal updateCurrentBid={updateCurrentBid} handleDeleteProduct={handleDeleteProduct} setToggleModal={setToggleModal} productObj={productObj} setProductObj={setProductObj}/>}
        </div>
        {console.log(productDisplay)}
        
        </>
    )
}

export default Browse