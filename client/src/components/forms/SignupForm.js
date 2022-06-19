import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupForm({user, setUser}) {
   
    const defaultObj = {
        name: "",
        email: "",
        address: "",
        phone_number: "",
        password: "",
        password_confirmation: ""
    }

    const navigate = useNavigate();

    const [formData, setFormData] = useState(defaultObj)
   

    function handleSetForm(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault();
        fetch("/signup", {
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
        <div id='signup-form-container'>
           
           <form onSubmit={handleSubmit}>
          
            <input
            id="signup-form-name"
            placeholder="Name"
            type="text"
            name="name"
            autoComplete="off"
            value= {formData.name}
            onChange= {(e) => handleSetForm(e)}
            />
            <br></br>
            

            
            <input
            id="signup-form-email"
            placeholder="Email"
            type="text"
            name="email"
            autoComplete="off"
            value= {formData.email}
            onChange= {(e) => handleSetForm(e)}
            />
            <br>
            </br>
            

            
            <textarea
            id="signup-form-address"
            placeholder="Address"
            name="address"
            autoComplete="off"
            value= {formData.address}
            onChange= {(e) => handleSetForm(e)}
            />
            <br></br>
           

            
            <input
            id="signup-form-ph"
            placeholder="Phone Number"
            type="text"
            name="phone_number"
            autoComplete="off"
            value= {formData.phone_number}
            onChange= {(e) => handleSetForm(e)}
            />
            <br></br>
            

            
            <input
            className="signup-form-pw"
            placeholder="Password"
            type="password"
            name="password"
            autoComplete="off"
            value= {formData.password}
            onChange= {(e) => handleSetForm(e)}
            />
            <br></br>
            

          
            <input
             className="signup-form-pw"
            placeholder="Confirm Password"
            type="password"
            name="password_confirmation"
            autoComplete="off"
            value= {formData.password_confirmation}
            onChange= {(e) => handleSetForm(e)}
            />
            <br></br>
            

            <button id="signup-form-btn" type="submit">Sign Up</button>
            
        </form>
        
        </div>
        
    )
}

export default SignupForm