import React from "react";
import Icon from '@salesforce/design-system-react/components/icon';

const iconArray = {
    
}

function SOIcon(props) {

const iconCS = <Icon
    assistiveText={{ label: 'Customer Success' }}
    category="standard"
    name="customers"
    size="large"
    className="soicon"
/>

const iconGrowth = <Icon
    assistiveText={{ label: 'Growth' }}
    category="standard"
    name="lightning_usage"
    size="large"
    className="soicon"
/>

const iconRR = <Icon
assistiveText={{ label: 'Revenue Retention' }}
category="standard"
name="partner_fund_request"
size="large"
className="soicon"
/>

    return (
        <div className="soicon">
         {iconRR}
        </div>
    )
}

export default SOIcon;