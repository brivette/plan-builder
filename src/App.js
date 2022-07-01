import NavigationBar from './components/NavigationBar';
import PieChartSection from './components/Piechart';
import Component from './components/Component';
import './App.css';
import React from 'react';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      component: {
        name: "Success Plan Attach",
        description: "Premierable ACV with Premier attached as a percent of total premierable ACV on closed won opportunities within assigned scope.",
        strategicObjective: "Growth",
        targetType: "%",
        color: `#0d9dda`,
        tiweight: 75
      } 
    }
  }
  
  render() {
    const compName = this.state.component.name;
    const color = this.state.component.color;
    const tiweight = this.state.component.tiweight;

    return (
      <div className="App">
        <NavigationBar 
          name = 'Brian Rivette'
          
        />
        <PieChartSection 
          componentName = {compName}
          color = {color}
          weight = {tiweight}
          />
        <Component
         componentName = {compName}
         weight = '75' 
         quota = '$2,500 USD'
         period = 'Cumulative Tier'
         multiplier = '1.5x'
         />
         
      </div>
    );
  }
}

export default App;
