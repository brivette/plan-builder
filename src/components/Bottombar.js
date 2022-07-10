import React, { useState } from 'react';
import Modal from '@salesforce/design-system-react/components/modal'; 

function BottomBar(props) {

    const [ isOpen, setToggleState ] = useState(false);
    const infoLabel = `Information on ${props.componentName}`;
    const payoutLabel = `Payout Curve for ${props.componentName}`;
    

    return (
    <div className="bottombar">
        <button 
            label="View your Payout Curve"
            onClick={setToggleState}
            className="payoutLink"
            >View your Payout Curve</button>
        
        <button
            label={infoLabel}
            onClick={setToggleState}
            className="payoutLink"
            >{infoLabel}</button>

        <Modal  
        id="payout-curve"
        isOpen={isOpen}
        onRequestClose={setToggleState}
        size="medium"
        heading={payoutLabel}
         >
            <div>
                <h5>Payout Curve for {props.componentName}</h5>

            </div>
         </Modal>

        
    </div>
    )
};

export default BottomBar;