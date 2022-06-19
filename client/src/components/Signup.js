import React, { useState, useEffect } from "react";

import SignupForm from "./forms/SignupForm"

function SignupPage({user, setUser}) {

    return (
        <div id='sign-up-container'>
        <h1 id="sign-up-title">Sign Up</h1>
        <p id="sign-up-p"><em>It's quick and easy.</em></p>
        <SignupForm user={user} setUser={setUser} />
        </div>
    )
}

export default SignupPage