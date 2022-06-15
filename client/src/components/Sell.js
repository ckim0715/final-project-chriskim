import React, { useState, useEffect } from "react";
import SellForm from "./forms/SellForm";


function Sell({user, setUser}) {

    


    return (
        <div id="sellform-wrapper">
            <SellForm user={user} setUser={setUser}/>
        </div>
    )
}

export default Sell