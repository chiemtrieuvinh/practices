import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';

test('main page render',() => {

})
//    Test block
// Render a component we want to test
// Find Elements we want to interact with
// Interact with those elements
// Assert that the results are as expected



// // nếu như mà mình muốn test function thì gọi hàm này
// const mockSetTodo = jest.fn() // fn đây có nghĩa là jest sẽ tạo ra 1 mock function để pass vào props
// // nếu như mình có 1 task add todos element và có 2 actions được gọi lặp lại liên tục thì mình sẽ viết ra 1 
// //function để thực hiện lại việc đó
// const addTask = (tasks) => {
//     const inputELement = screen.getByLabelText('Input')
//     const addButtonElement = screen.getByRole('button', {name:'/Add/i'})
//     tasks.forEach((item) => {
//         fireEvent.change(inputELement,{target:{value: item}})
//         fireEvent.click(addButtonElement)
//     })
// }
// describe('AddInput', () =>{
//     // 2 Thằng này sẽ luôn chạy sau và trước mỗi test(ở đây là mỗi it)
//     beforeEach(()=>{
//         //
//     })
//     afterEach(()=>{

//     })
//     // 2 thg này sẽ chạy trước hết tất cả các test rồi sau đó mới chạy tới test cases
//     beforeAll(()=>{})
//     afterAll(()=>{})

//     //------------------------------------
//     it('should render input element',() => {
//      render(<Input 
//         todos = {[]}
//         setTodos = {mockSetTodo}
//         />)
//      const inputElement = screen.getByLabelText('input')
//      expect(inputElement).toBeInDocument()
//     }),
//     it('should be able to type in input element',() => {
//         // muốn làm được phần này phải dùng fireEvent lấy từ @react/testing-library
//         render(<Input 
//            todos = {[]}
//            setTodos = {mockSetTodo}
//            />)
//         const inputElement = screen.getByLabelText('input')
//         fireEvent.change(inputElement, {target: {value:'Hello'}})
//         expect(inputElement.value).toBe('Hello')
//     }),
//     it('should have empty input when add button is clicked',() => {
//         // muốn làm được phần này phải dùng fireEvent lấy từ @react/testing-library
//         render(<Input 
//            todos = {[]}
//            setTodos = {mockSetTodo}
//            />)
//         const inputElement = screen.getByLabelText('input')
//         const addButtonElement = screen.getByRole('button',{name: /Add/i})
//         fireEvent.change(inputElement, {target: {value:'Hello'}})
//         fireEvent.click(addButtonElement)
//         expect(inputElement.value).toBe('')
//     }),
//     it('should render multiple Elements', () => {
//         render(<Input/>)
//         addTask(['Hello','Vinh','How are you']);
//         //Nếu list hiển thị của mình là 1 danh sách thì gắn data-testid cho thẻ div chứa <li> để lấy hết thông tin con
//         //<div data-testid ="divTest"></div>
//         const divElement = getAllByTestId('divTest')
//         expect(divElement.length).toBe(3)
//     }),
//     it('Tasks should not have completed class when initially rendered', () =>{
//         render(<Input/>)
//         addTask(['Hello']);
//         //Nếu list hiển thị của mình là 1 danh sách thì gắn data-testid cho thẻ div chứa <li> để lấy hết thông tin con
//         //<div data-testid ="divTest"></div>
//         const divElement = screen.getByText('Hello')
//         fireEvent.click(divElement)
//         expect(divElement).not.toHaveClass("todo-item-active")
//     }
// })