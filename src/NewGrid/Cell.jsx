import React from 'react'


const Cell = React.memo(({ cellData, handleUpdate,cellIndex }) => {
    return <div className="cellData" onClick={() => handleUpdate(cellIndex)}>{cellData}</div>
})
export default Cell


