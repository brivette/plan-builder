import { VictoryLabel, VictoryPie } from 'victory';



function PieChart(props) {
  const data = [
    { x: props.componentName, y: props.weight, name: props.componentName },
    { x: props.componentName2, y: props.weight2, name: props.componentName2 },
   ]  

  return (
    <div className='pie-landscape'>
      <VictoryPie
        data = {data}
        colorScale={[ "#0d9dda", "#032d60", "#0176d3"  ]}
        labels={({ datum }) => `${datum.x} \n ${datum.y}%`}
        labelPosition={({ index }) => index
          ? "centroid"
          : "centroid"
          }
        labelComponent={
          <VictoryLabel
            lineHeight={1}
            style={ [{ fontSize: 18 } ]}
            verticalAnchor="middle"
    />
  }
    />
  </div>
  )
}

export default PieChart;