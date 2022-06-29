import React, { useState, useEffect } from 'react'
import { render } from 'react-dom/cjs/react-dom.production.min'
// import Row from './Row'
import Cell from './Cell'

const LiCell = React.memo(({value,index,handleDelete}) => {
    React.useEffect(() => {
        console.log(`Cell with value ${value} rendered`)
        return () => {
            console.log(`Cell with value ${value} removed`)
        }
    },[])
    return <li  onClick={() => handleDelete(index)}>{value}</li>
})

const GridUpdate = React.memo(() => {
    const [string,setString] = useState(() => localStorage.getItem('string') || '')
    const [list, setList] = useState([{ value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }, { value: '5' }, { value: '6' }, { value: '7' }, { value: '8' }, { value: '9' }])
    const [array, setArray] = useState([{ value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }, { value: '5' }, { value: '6' }, { value: '7' }, { value: '8' }, { value: '9' }])
    const handleClick = React.useCallback((valueIndex) => {
        setList((prevList) => prevList.map((listItem, listIndex) => {
            if (listIndex === valueIndex) {
                return { ...listItem, value: Math.floor(Math.random() * 100) }
            } else {
                return listItem
            }
        }))
    }, [])
    const handleDelete = (index) => {
        setArray(prev => prev.filter((item, idx) => idx !== index))
    }
    useEffect(() => {
        console.log('first render')
        // returned function will be called on component unmount 
        return () => {
            console.log('component will unmount')
        }
    }, [])
    useEffect(() => {
     localStorage.setItem('string',string)   
    },[string])
    return <div className="rowData">
        <input name="string" onChange={(e) => setString(e.target.value)} value={string}/>
        <div className="rowWrapper">
            <div className="cellData">Column 1</div>
            <div className="cellData">Column 2</div>
            <div className="cellData">Column 3</div>
            {
                list.map((item, index) => {
                    return <Cell
                        key={`cell-${index}`}
                        cellData={item.value}
                        cellIndex={index}
                        handleUpdate={handleClick}
                    />
                })
            }
        </div>
        <div>
            <ul>
                {
                    array.map((item, index) => {
                        return <LiCell key={`cell-${item.value}`} value={item.value} handleDelete={handleDelete} index={index}/>
                    })
                }
            </ul>
        </div>
    </div>
})
export default GridUpdate
