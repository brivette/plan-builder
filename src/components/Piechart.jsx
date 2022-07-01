import { PieChart } from 'react-minimal-pie-chart';

const shiftSize = 1;

function PieChartSection(props) {

  const defaultLabelStyle = {
    fontSize: '15px',
    fontFamily: 'default'
  };

  return (
    <div>
<PieChart
  data={[
    { value: props.weight, color: props.color, component: props.componentName },
    { value: 15, color: '#C13C37' },
    { value: 20, color: '#6A2135' },
  ]}
    lineWidth="90"
    totalvalue="100"
    style={{ height: '25vh' }}
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