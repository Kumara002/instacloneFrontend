import React from "react";
import { BrowserRouter,Switch,Route,Link } from "react-router-dom";
import  pic from "./lens-1418954@2x.jpg";
import "./Landingpage.css"

export default function LandingPage(){
    return(
        <div>
            {/* <h2>Welcome to LandingPage</h2> */}
            <img id="enterance" src={pic} alt="enterance"></img>
            <p id="enterancetext">10x Team</p>
            <br/>
           <Link to="/postview"><button id="enterinsta"><text id="textenter">Enter</text></button></Link>
        </div>
    )
}