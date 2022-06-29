import React from 'react'
import Cell from './Cell'
const Row = React.memo(({ rowData, handleUpdate,rowIndex }) => {
    return <tr>
        {
            rowData.map((item,cellIndex) => {
                const { value } = item
                return <Cell 
                key={`cell-${rowIndex}-${cellIndex}`}
                cellIndex={cellIndex}
                rowIndex={rowIndex}
                cellData = {value} 
                handleUpdate={handleUpdate}
                />
            })
        }
    </tr>
})
export default Row


