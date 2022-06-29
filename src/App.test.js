import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render,screen} from '@testing-library/react'
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('renders learn react link', () => {
  render(<App/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInDocument()
})
//    Test block
// Render a component we want to test
// Find Elements we want to interact with
// Interact with those elements
// Assert that the results are as expected
