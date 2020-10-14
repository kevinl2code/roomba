import React from 'react'

const TableRow = ({ step, location, action, collected, hits }) => (
    <React.Fragment>
        <tr>
            <td data-label="Step">{ step }</td>
            <td data-label="Roomba Location">{ `${location[0]}, ${location[1]}` }</td>
            <td data-label="Action">{ action }</td>
            <td data-label="Collected">{ collected }</td>
            <td data-label="hits">{ hits }</td>
        </tr>
    </React.Fragment>
)

export default TableRow