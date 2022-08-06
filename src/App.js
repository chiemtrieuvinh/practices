import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form/index'
import FormControl from './formControl/index'
import GridUpdate from './GridUpdate/index'
import NewGrid from './NewGrid/index'
import StopWatch from './StopWatch/index'
import Counter from './Counter/index'
import ContextPractice from './ContextPractice/index'
import Table from './Table'
class App extends Component {
  render() {
    return (
      <div className="App">
           <Table/>
          <br/>
        <div>
          <div>First counter test with Enzyme</div>
          <Counter/>
        </div>
        <br/>
        <StopWatch/>
        <br/>
        <ContextPractice/>
        {/* <Form/>
        <FormControl/>
        <GridUpdate/>
        <NewGrid/> */}
      </div>
    );
  }
}

export default App;
