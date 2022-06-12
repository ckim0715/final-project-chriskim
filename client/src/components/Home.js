import React, { useState, useEffect } from "react";
import LoginForm from "./forms/LoginForm"

function Home({user, setUser}) {

    return (
        <>
            <h1>Home Page</h1>

            <LoginForm user={user} setUser={setUser} />
        </>
    )
}

export default Home