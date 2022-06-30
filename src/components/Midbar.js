import React from "react";

function Midbar(props) {
    return (
        <div className="midbar">
            <div className="container">
                <div className="item">
                    <h4>QUOTA</h4>
                    <h3>{props.quota}</h3>
                </div>
                <div className="item">
                    <h4>PERIOD</h4>
                    <h3>{props.period}</h3>
                </div>
                <div className="item">
                    <h4>MULTIPLIER</h4>
                    <h3>{props.multiplier}</h3>
                </div>
            </div>
        </div>
    )
};

export default Midbar;