import React, { useState, useEffect } from "react";

import SignupForm from "./forms/SignupForm"

function SignupPage({user, setUser}) {

    return (
        <div id='sign-up-container'>
        <h1>SignupPage</h1>
        <SignupForm user={user} setUser={setUser} />
        </div>
    )
}

export default SignupPage