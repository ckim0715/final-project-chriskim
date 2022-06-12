import '../App.css';
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Browse from './Browse';
import About from './About';
import Account from './Account';
import Sell from './Sell';
import Home from './Home';
import Signup from './Signup';
import Navbar from './Navbar';


function App() {

  const [user, setUser] = useState(null);

  // auto-login fetch:
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);
  
console.log(user)
  return (
    
  <div className ="App">

    
   {user? <Navbar user={user} setUser={setUser} /> : null}
    
    <Routes>
      <Route path='/' element ={<Home user={user} setUser={setUser} />} />
      <Route path='/browse' element ={<Browse user={user} />} />
      <Route path='/about' element ={<About />} />
      <Route path='/account' element ={<Account />} />
      <Route path='/sell' element ={<Sell user={user} setUser={setUser} />} />
      <Route path='/signup' element ={<Signup user={user} setUser={setUser} />} />
      
           
    </Routes>
      
  </div>
  );
}

export default App;
