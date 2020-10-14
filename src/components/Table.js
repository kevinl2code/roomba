import React from 'react'
import TableRow from './TableRow'
import { initialRoombaLocation } from '../data.json'

class Table extends React.Component {

    populateTable = () => this.props.output.map((el, index) => {
            return <TableRow 
                        step={el.step} 
                        location={el.location} 
                        action={el.action} 
                        collected={el.dirtCollected} 
                        hits={el.wallHits}
                        key={index}
                    />
        })
    
    render() {
        return (
            <div>
                <table className="ui celled table">
                    <thead className="center aligned">
                        <tr>
                            <th>Step</th>
                            <th>Roomba Location</th>
                            <th>Action</th>
                            <th>Total Dirt Collected</th>
                            <th>Total Wall Hits</th>
                        </tr>
                    </thead>
                    <tbody className="center aligned">
                        <TableRow 
                            step={1} 
                            location={initialRoombaLocation} 
                            action={''} 
                            collected={0} 
                            hits={0}
                            key={'init'}
                        />
                        {this.populateTable()}
                    </tbody>
                </table>
            </div>
        )
    }    
}

export default Table