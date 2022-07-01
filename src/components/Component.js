import React from "react";
import ComponentTitle from "./ComponentTitle";
import TIbar from "./TIbar";
import Midbar from "./Midbar";
import Bottombar from "./Bottombar";

function Component(props) {
    return (
        <div className="component">
        <ComponentTitle 
            componentName = {props.componentName}

        />
        <div className="split">
            <TIbar 
            componentName={props.componentName}
            weight={props.weight}
            />
            
            <Midbar 
            quota = {props.quota}
            period = {props.period}
            multiplier = {props.multiplier}
            />
        </div>
        <Bottombar
            componentName = {props.componentName}
            />
       </div>
    )
};

export default Component;