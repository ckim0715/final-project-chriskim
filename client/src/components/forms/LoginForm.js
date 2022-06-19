import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm({user, setUser}) {

    const defaultObj = {
        email: "",
        password: ""
    }

    const navigate = useNavigate();

    const [formData, setFormData] = useState(defaultObj)
   

    function handleSetForm(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    

    function handleSubmit(e){
        e.preventDefault();
        fetch("/login", {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        }).then ((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user));
                navigate('/browse')
            } else {
                r.json().then((err) => console.log(err.errors))
            }
        });
            

    }



    return (
        <div id="login-form-wrapper">
        <form  onSubmit={handleSubmit}>
            <div id="login-form-div">
           
            <input
            placeholder="Email Address"
            id="login-form-email"
            type="text"
            name="email"
            autoComplete="off"
            value= {formData.username}
            onChange= {(e) => handleSetForm(e)}
            />
           

           
            <input
            placeholder="Password"
            id="login-form-pw"
            type="password"
            name="password"
            autoComplete="off"
            value= {formData.password}
            onChange= {(e) => handleSetForm(e)}
            />
            </div>
           
            <div id="login-form-btn-container">
            <button id="login-form-btn" type="submit">Log In</button>
            </div>
            
        </form>

        <div id="sign-up-link">

        <a  href='/signup'><em>New User? Sign Up Here!</em></a>
        </div>
        </div>
    )
}

export default LoginForm