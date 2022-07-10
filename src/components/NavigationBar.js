import React from "react";
import logo from '../img/sf-logo.png';


function NavigationBar(props) {
    return (
        <div className="navbar">
            <div className="main">  
                <img src={logo} 
                    alt='Salesforce Logo'
                    className="sf-logo" />
                <h1>
                    FY24 Incentive Compensation Plan
                </h1>
            </div>
            <div className="flex-end">
                <h2>
                    Welcome, {props.name}
                </h2>
                    <div className="links">
                        <option value="grapefruit">Incentive Compensation Plan | </option>
                        <option value="lime">Commission Estimator | </option>
                        <option value="coconut">Resources</option>
                    </div>
            </div>
       </div>
    )
};

export default NavigationBar;