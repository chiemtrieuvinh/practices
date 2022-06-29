import React, { useState,useEffect,useCallback } from 'react'
import Row from './Row'
const GridUpdate = React.memo(() => {
    const [list, setList] = useState([[{ value: '1' }, { value: '2' }, { value: '3' }], [{ value: '4' }, { value: '5' }, { value: '6' }], [{ value: '7' }, { value: '8' }, { value: '9' }]])
    const handleClick = React.useCallback((rowIndex, valueIndex) => {
        console.log(rowIndex,valueIndex,'check')
        setList((prevList) => prevList.map((listItem, listIndex) => {
            if (listIndex === rowIndex) {
                return listItem.map((innerItem, listItemIndex) => {
                    return listItemIndex === valueIndex ? { ...innerItem, value: Math.floor(Math.random() * 100) } : innerItem
                })
            } else {
                return listItem
            }
        }))
    }, [])
    return <div style={{padding:'15px 15px'}}>
        <table>
            <thead>
                <tr>
                    <th>Column 1</th>
                    <th>Column 2</th>
                    <th>Column 3</th>
                </tr>
            </thead>
            <tbody>
                {
                    list.map((item, index) => {
                        return <Row
                            key={`row-${index}`}
                            rowIndex={index}
                            rowData={item}
                            handleUpdate={handleClick}
                        />
                    })
                }
            </tbody>
        </table>
    </div>
})
export default GridUpdate





