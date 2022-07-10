import React from "react";
import Modal from '@salesforce/design-system-react/components/modal'; 

class ComponentInfo extends React.Component {
    state = {
        isOpen: false;
    }

    toggleOpen = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };
}