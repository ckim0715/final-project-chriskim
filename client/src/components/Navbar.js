import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

function Navbar ({user, setUser}) {
    const navigate = useNavigate()

    function handleLogout(){
        fetch("/logout", {method: "DELETE"}).then((r) => {
            if (r.ok){setUser(null)}
        });
        navigate("/")
    }

    return(
    
    <nav id="navbar">
    <a href="/browse">Browse</a>
    <a href="/about">About</a>
    <a href="/account">My Account</a>
    <a href="/sell">Sell</a>
    {user? <button onClick={handleLogout}>Logout</button> : null}
    
    </nav>
    
    )


}

export default Navbar