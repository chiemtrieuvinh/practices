import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form/index'
import FormControl from './formControl/index'
import GridUpdate from './GridUpdate/index'
import NewGrid from './NewGrid/index'
import AsyncState from './AsyncState/index'
import Counter from './Counter/index'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <div>First counter test with Enzyme</div>
          <Counter/>
        </div>
        <br/>
        <AsyncState/>
        {/* <Form/>
        <FormControl/>
        <GridUpdate/>
        <NewGrid/> */}
      </div>
    );
  }
}

export default App;
