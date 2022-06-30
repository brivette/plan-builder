import React from "react";

import Icon from '@salesforce/design-system-react/components/icon';

const iconArray = {
    
}

function SOIcon(props) {

    return (
        <div className="soicon">
            <Icon
            assistiveText={{ label: 'Customer Success' }}
            category="standard"
            name="customers"
            size="large"
            className="soicon"
            />
        </div>
    )
}

export default SOIcon;