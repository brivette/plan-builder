import React from "react";

function Bottombar(props) {
    return (
        <div className="bottombar">
                <h5>View your Payout Curve</h5>
            
                <h5>Information on {props.componentName}</h5>
        </div>
    )
}

export default Bottombar;