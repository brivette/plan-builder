import React from "react";
import Icon from '@salesforce/design-system-react/components/icon';


const strategicSetCS = "customers"
const strategicSetG = "lightning_usage"
const strategicSetCR = "partner_fund_request"

function SOIcon(props) {

    return (
        <div className="soicon">
            <Icon 
                category="standard"
                name={strategicSetCS}
                className="soicon"
                />
        </div>
    )
}

export default SOIcon;