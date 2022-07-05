import { PieChart } from 'react-minimal-pie-chart';

const shiftSize = 1;

function PieChartSection(props) {

  const defaultLabelStyle = {
    fontSize: '.45rem',
    fontFamily: 'default',
    
  };

  return (
    <div className='pie-landscape'>
<PieChart
  data={[
    { value: props.weight, color: props.color, component: props.componentName },
    {value: props.weight2, color: props.color2, component: props.componentName2 },
  ]}
    lineWidth="90"
    totalvalue="100"
    style={{ width: '75%' }}
    radius={PieChart.defaultProps.radius - shiftSize}
    label={({ dataEntry }) => dataEntry.component}
    labelStyle={{
      ...defaultLabelStyle,
    }}
  />
  </div>
  )
}

export default PieChartSection;