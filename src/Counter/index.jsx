import React from 'react'

class Counter extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            counter: 0,
            error: false
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }
    increment() {
      this.setState(prevState => {
        return {
            ...prevState,
            counter: prevState.counter + 1,
            error: false
        }
      })
    }
    decrement() {
        this.setState(prevState => {
          return {
              ...prevState,
              counter: prevState.counter - 1 < 0 ? 0 : prevState.counter - 1,
              error: prevState.counter - 1 < 0 ? true : false
          }
        })
      }
    render(){
        return <div>
        <div data-test='component-counter'>
            <div data-test='counter-display'>{this.state.counter}</div>
            {
                this.state.error && <div data-test='error'>Counter can not below 0</div>
            }
            <button data-test='increment-button' onClick={this.increment}>Increment</button>
            <button data-test='decrement-button' onClick={this.decrement}>Decrement</button>
        </div>
     </div>
    }
}
export default Counter