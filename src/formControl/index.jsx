import React,{useState} from 'react'
const FormComp = () => {
    const [list,setList] = useState([{value:'0'},{value:'0'},{value:'0'}])
    const handleChange = React.useCallback((e, index) => {
        e.preventDefault()
        const {value,name} = e.target
        // console.log(value)
        // const newList = list.map((item,idx) => {
        //     if(index === idx) {
        //         return {
        //             value
        //         }
        //     }else{
        //         return {
        //             ...item
        //         }
        //     }
        // })
        setList(list => list.map((item,idx) => {
                if(index === idx) {
                    return {
                        value
                    }
                }else{
                    return {
                        ...item
                    }
                }
            }))
    },[])
    return <ul>
        {
            list.map((item,index) => {
                return <li  key={`item-${index}`}><input value={item.value} onChange={(e) => handleChange(e,index)} name="value"/><span style={{color:'red'}}> {item.value}</span></li>
            })
        }
    </ul>
}
export default FormComp


