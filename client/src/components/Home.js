import React, { useState, useEffect } from "react";
import LoginForm from "./forms/LoginForm"

function Home({user, setUser}) {

    return (
       <div id="home-wrapper">
            <h1><span id="home-logo">THRIFT</span><span id="home-logo2">_E</span></h1>
           

            <LoginForm user={user} setUser={setUser} />
            </div>
        
    )
}

export default Home