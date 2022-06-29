import React from 'react'
import data from './data.json'
// import {useForm} from 'react-hook-form'
const FormComp = () => {
    // const [list,setList] = React.useState(data)
    const refValue = React.useRef(0)
    const listRef = React.useRef(data.map(item => React.createRef()))
    // console.log(listRef,'check ref')
    // const listTotalRef = listRef.current.map(item => item)
    console.log(listRef,'check total ref')
    // useEffect(() => {

    // },[])
    const handleChange = (index) => (e) => {
        e.preventDefault()
        console.log(e.target.value)
        // if (listRef[index + 1]) listRef[index + 1].current.focus(); 
        // console.log(listRef.current[index],'check')
        if (listRef.current[index]){
            console.log(index,e.target.name,e.target.value, 'check')
        }
    }
    const handleRefChange = (e) => {
        e.preventDefault()
        // refValue.current =  () => setRefState((prevState) => prevState + 1)
        
        // console.log(refValue.current)
    }

    console.log(refValue,'check ref')
    return <form>
        <div>
            <div>{refValue.current}</div>
            <div><button onClick={handleRefChange}>Increasement</button></div>
        </div>
        <table>
            <thead>
                <tr>
                    <th>OK Qty</th>
                    <th>BGroup Qty</th>
                    <th>Reject Qty</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {listRef.current.map((item,i) => {
                    return <tr key={`row-${i}-data`}>
                        {/* <td><input ref={el => (listRef.current[i] = el)} defaultValue={0} name="okQty" onChange={handleChange(i)}/></td>
                        <td><input ref={el => (listRef.current[i] = el)} defaultValue={0} name="bgroupQty" onChange={handleChange(i)}/></td>
                        <td><input ref={el => (listRef.current[i] = el)} defaultValue={0} name="rejectQty" onChange={handleChange(i)}/></td> */}
                        <td><input ref={item} defaultValue={0} name="okQty" onChange={handleChange(i)}/></td>
                        <td><input ref={item} defaultValue={0} name="bgroupQty" onChange={handleChange(i)}/></td>
                        <td><input ref={item} defaultValue={0} name="rejectQty" onChange={handleChange(i)}/></td>
                        <td style={{color:'blue'}}>0</td>
                    </tr>
                })}
                 <tr>
                        <td style={{color:'blue'}}>0</td>
                        <td style={{color:'blue'}}>0</td>
                        <td style={{color:'blue'}}>0</td>
                        <td style={{color:'red'}}>0</td>
                    </tr>
            </tbody>
        </table>
        <button type="submit">submit</button>
    </form>
}
export default FormComp


