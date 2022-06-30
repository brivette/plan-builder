import React from "react";
import Midbar from "./Midbar";
import Bottombar from "./Bottombar";
import SOIcon from './Icon';

function Component(props) {
    return (
        <div className="component">
         <div className="header">
        <SOIcon />
        <h2>{props.componentName}</h2>
        </div>
        <span>Target Incentive Weight</span>
        <h1>{props.weight}%</h1>
        <Midbar 
            quota = {props.quota}
            period = {props.period}
            multiplier = {props.multiplier}
        />
        <Bottombar
            componentName = {props.componentName}
            />
       </div>
    )
};

export default Component;