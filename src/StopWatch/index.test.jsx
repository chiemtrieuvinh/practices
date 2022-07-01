import React from 'react'
import {screen, render,fireEvent,act} from '@testing-library/react'
import StopWatch from './index'

const setupCheckElementRender = (arr) => {
    arr.forEach((item) => {
        const {role,value} = item
        it(`Render ${value} element`,() => {
            render(<StopWatch/>)
            const renderElement = screen.getByRole(role, {name: value})
            expect(renderElement).toBeInTheDocument()
        })
    })
}

describe('Listing all cases can occur in StopWatch component', ()=>{
    describe('render all element on the screen', () => {
        const renderList = [
            {role:'button',value:'Start'},
            {role:'button',value:'Stop'},
            {role:'button',value:'Reset'}]
        it('Render Input element', () => {
            render(<StopWatch/>)
            const inputElement = screen.getByLabelText(/enter seconds/ig)
            expect(inputElement).toBeInTheDocument()
        })
        setupCheckElementRender(renderList)
        it('Render Time display element', () => {
            render(<StopWatch/>)
            const timeDisplay = screen.queryByTestId('timeDisplay')
            expect(timeDisplay).toBeInTheDocument()
        })

    })
  
  describe('users interact with every element',() => {
    it('Change input value to convert time display',() => {
      render(<StopWatch/>)
      const inputElement = screen.getByLabelText(/enter seconds/ig)
      const timeDisplay = screen.getByTestId('timeDisplay')
      fireEvent.change(inputElement, {target: {value: '120'}})
      expect(timeDisplay.textContent).toBe('02:00')
    })
    it('Can not input negative number' ,() => {
        render(<StopWatch/>)
        const inputElement = screen.getByLabelText(/enter seconds/ig)
        const timeDisplay = screen.getByTestId('timeDisplay')
        fireEvent.change(inputElement, {target: {value: '-100'}})
        expect(inputElement.value).toBe('100')
        expect(timeDisplay.textContent).toBe('01:40')
    })
    it('Click start button to start counting and Stop to prevent counting',() => {
        jest.useFakeTimers();
        render(<StopWatch/>)
        const timeDisplay = screen.getByTestId('timeDisplay')
        const startButton = screen.getByRole('button',{name:/start/i})
        const stopButton = screen.getByRole('button',{name:/stop/i})
        fireEvent.click(startButton)
        act(() => {
            jest.advanceTimersByTime(120000);
          })
        fireEvent.click(stopButton)
        expect(timeDisplay.textContent).toBe('02:00')
    })
    it('Click reset button to reset all values',() => {
        render(<StopWatch/>)
        const inputElement = screen.getByLabelText(/enter seconds/ig)
        const timeDisplay = screen.getByTestId('timeDisplay')
        const resetButton = screen.getByRole('button',{name:/reset/i})
        fireEvent.click(resetButton)
        expect(inputElement.value).toBe('0')
        expect(timeDisplay.textContent).toBe('00:00')
    })
  })
})