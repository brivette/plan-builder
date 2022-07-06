import NavigationBar from './components/NavigationBar';
import PieChart from './components/Piechart';
import Component from './components/Component';
import './App.css';
import React from 'react';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      component: {
          one: {
            name: "Success Plan Attach",
            description: "Premierable ACV with Premier attached as a percent of total premierable ACV on closed won opportunities within assigned scope.",
            strategicObjective: "Customer Success",
            targetType: "%",
            color: `#0d9dda`,
            tiweight: 75
          },
          two: {
            name: "ACV",
            description: "Premierable ACV with Premier attached as a percent of total premierable ACV on closed won opportunities within assigned scope.",
            strategicObjective: "Growth",
            targetType: "%",
            color: `#0176d3`,
            tiweight: 25
          }
      } 
    }
  }
  
  render() {
    const compName = this.state.component.one.name;
    const color = this.state.component.one.color;
    const tiweight = this.state.component.one.tiweight;
    const strategicObjective = this.state.component.one.strategicObjective;

    const compName2 = this.state.component.two.name;
    const color2 = this.state.component.two.color;
    const tiweight2 = this.state.component.two.tiweight;
    const strategicObjective2 = this.state.component.two.strategicObjective;


    return (
      <div className="App">
        <NavigationBar 
          name = 'Brian Rivette'
          
        />
        <div className='main'>
        <PieChart 
          componentName = {compName}
          componentName2 = {compName2}
          color = {color}
          color2 = {color2}
          weight = {tiweight}
          weight2 = {tiweight2}
          />
        <Component
         componentName = {compName}
         weight = '75' 
         quota = '$2,500 USD'
         period = 'Cumulative Tier'
         multiplier = '1.5x'
         strategicObjective = {strategicObjective}
         />
         <Component
         componentName = {compName2}
         weight = '25' 
         quota = '$122,500 USD'
         period = 'Cumulative Tier'
         multiplier = '1.5x'
         strategicObjective = {strategicObjective2}
         />
         </div>
      </div>
    );
  }
}

export default App;
