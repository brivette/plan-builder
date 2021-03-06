import SOIcon from './Icon';

function ComponentTitle(props) {
    return (
    <div className="header">
        <SOIcon 
        SO = {props.strategicObjective}
        />
        <h2>{props.componentName}</h2>
    </div>
    )
};

export default ComponentTitle;