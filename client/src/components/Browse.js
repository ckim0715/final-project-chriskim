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
        const newProductArray = productDisplay.filter ((product) => product.id != deletedProduct.id)
        setProductDisplay(newProductArray)

    }

    

    return (
        <>
        <h1>Browse Page</h1>
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

        <div id="products-display" >
       {productDisplay.map((product) => <ProductDisplay productObj={productObj} setProductObj={setProductObj} setToggleModal ={setToggleModal} key={product.id} product={product} />
       )}
        </div>

        {toggleModal && <BidModal  handleDeleteProduct={handleDeleteProduct} setToggleModal={setToggleModal} productObj={productObj} setProductObj={setProductObj}/>}
        </div>
        {console.log(productDisplay)}
        
        </>
    )
}

export default Browse