import React, { useState, useEffect } from "react";
import SellForm from "./forms/SellForm";


function Sell({user, setUser}) {

    


    return (
        <div>
            <h1>Sell Page</h1>
            <SellForm user={user} setUser={setUser}/>
        </div>
    )
}

export default Sell