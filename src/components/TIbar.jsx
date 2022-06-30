

function TIbar(props) {
    return (
        <div className="tibar">
            <span>Target Incentive Weight</span>
            <h1>{props.weight}%</h1>
        </div>
    )
};

export default TIbar;
