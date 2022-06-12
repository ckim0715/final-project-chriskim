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
        <>
        <form onSubmit={handleSubmit}>
            <label>Email:
            <input
            type="text"
            name="email"
            autoComplete="off"
            value= {formData.username}
            onChange= {(e) => handleSetForm(e)}
            />
            </label>

            <label>Password:
            <input
            type="password"
            name="password"
            autoComplete="off"
            value= {formData.password}
            onChange= {(e) => handleSetForm(e)}
            />
            </label>

            <button type="submit">Login</button>
            
        </form>

        <a href='/signup'>New User? Sign Up Here!</a>
        </>
    )
}

export default LoginForm