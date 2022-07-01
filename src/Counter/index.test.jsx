import React from 'react';
// import ReactDOM from 'react-dom';
import Counter from './index';
// import {render,screen} from '@testing-library/react'
import Enzyme,{shallow} from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { fireEvent, render } from '@testing-library/react';

Enzyme.configure({adapter: new EnzymeAdapter()})

//    Test block
// Render a component we want to test
// Find Elements we want to interact with
// Interact with those elements
// Assert that the results are as expected


// Use Enzyme's shallow to render a component
// Tested DOM elements rendered by using find
// Tested state of a Component using Enzyme state() and setState()
// Use simulate to interact with rendered elements (clicked button)
// Tested component update after interaction
// Create re-usable setup() and findByTextAttr



/*
 * Factory function to create a ShallowWrapper for the App Component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @param {any} state
 * @returns ShallowWrapper
*/

const setup = (props={},state=null) => {
    const wrapper = shallow(<Counter {...props}/>)
    if(state) wrapper.setState(state)
    return wrapper;
}

/*
 * Return ShallowWrapper containing node(s) with given data-test value
 * @params {ShallowWrapper} wrapper - Enzyme Shallow Wrapper to search within
 * @params {string} - Value of data-test attribute for search
 * @returns ShallowWrapper 

*/
const findByTestAttr = (wrapper,val) => {
 return wrapper.find(`[data-test="${val}"]`)
}

describe('Counter increment', () => {
    const wrapper = setup()

    test('render without errors', () => {
        const appComponent = findByTestAttr(wrapper,'component-counter')
        expect(appComponent.length).toBe(1)
      })
      test('render increment button', () => {
        const buttonComponent = findByTestAttr(wrapper,'increment-button')      
        expect(buttonComponent.length).toBe(1)
      })
      test('render counter display', () => {
        const counterDisplayComponent = findByTestAttr(wrapper,'counter-display')
        expect(counterDisplayComponent.length).toBe(1)
      })
      test('counter start at 0', () => {
        const initialCounterState = wrapper.state('counter')
        expect(initialCounterState).toBe(0)
      })
      test('clicking button increments counter display', () => {
        let counter = 7;
        const wrapper = setup(null,{counter})

        // find Button and Click
        const buttonComponent = findByTestAttr(wrapper,'increment-button')      
        buttonComponent.simulate('click')
        wrapper.update()

        // find display and test value
        const counterDisplayState = findByTestAttr(wrapper,'counter-display')
        expect(counterDisplayState.text()).toContain(counter + 1)
      })
})

describe('Counter Decrement', () => {
    const wrapper = setup()

    test('Render decrement button', () => {
       const decrementButton = findByTestAttr(wrapper,'decrement-button')
       expect(decrementButton.length).toBe(1)
    })
    test('Counter display decrement by 1', () => {
        let counter = 7
        const wrapper = setup(null,{counter})
        const decrementButton = findByTestAttr(wrapper,'decrement-button')
        decrementButton.simulate('click')
        wrapper.update()
        const counterDisplay = findByTestAttr(wrapper,'counter-display')
        expect(counterDisplay.text()).toContain(counter - 1)
    })
    test('Not render error message if there is no error state', () => {
      let error = false
      const wrapper = setup(null,{error})
      const errorElement = findByTestAttr(wrapper,'error')
      const initialErrorState = wrapper.state('error')
      expect(initialErrorState).toBe(false)
      expect(errorElement.length).toBe(0)
    })
    test('If counter display below zero, render error message',() => {
      let error = true
      let counter = 0
      const wrapper = setup(null,{counter,error})
      const decrementButton = findByTestAttr(wrapper,'decrement-button')
      decrementButton.simulate('click')
      wrapper.update()
      const errorComponent = findByTestAttr(wrapper,'error')
      expect(errorComponent.text()).toContain('Counter can not below 0')
    }) 
})




