import React from 'react'


const Cell = React.memo(({ cellData, handleUpdate, rowIndex, cellIndex }) => {
    return <td onClick={() => handleUpdate(rowIndex, cellIndex)}>{cellData}</td>
})
export default Cell


