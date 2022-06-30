import React from "react";


function NavigationBar(props) {
    return (
        <div className="navbar">
       <h1>
        Plan Builder
       </h1>
       <h2>
        Welcome, {props.name}
       </h2>
       </div>
    )
};

export default NavigationBar;