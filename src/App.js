import NavigationBar from './components/NavigationBar';
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
        targetType: "%"
      } 
    }
  }
  render() {
    return (
      <div className="App">
        <NavigationBar 
          name = 'Brian'
        />
        <Component
         componentName = {this.state.component.name}
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
