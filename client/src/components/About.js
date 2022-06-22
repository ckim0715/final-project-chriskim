import React, { useState, useEffect } from "react";

function About() {

    return (
        <div id="about-wrapper">  
        <div id="mission-statement-container">
        <h1 id="about-header">Verified. Tested. Trusted.</h1>
        
        <p>Our mission is to provide a trusted marketplace for used PC components where buyers and sellers don't have to worry about getting scammed.  Our products are verified for 100% authenticity and tested before they are shipped to buyers.  Why burden yourself with the worry of losing your money when you can shop with <span id="about-logo">THRIFT</span><span id="about-logo2">_E</span> <span id="about-excl">!</span></p> 
        </div> 
        <div id="about-image-container">
            <img id="about-image" src="https://m.media-amazon.com/images/I/51DdZaX3viS._AC_SL1237_.jpg" alt="Dell Alienware PC"></img>
        </div>
        </div>
       
        

       
        
    )
}

export default About