import React from "react";
import logo from '../img/sf-logo.png';


function NavigationBar(props) {
    return (
        <div className="navbar">
        <div className="flex">  
        <img src={logo} 
             alt='Salesforce Logo'
             className="sf-logo" />
       <h1>
        FY24 Incentive Compensation Plan
       </h1>
       </div>
       <h2>
        Welcome, {props.name}
       </h2>
       </div>
    )
};

export default NavigationBar;