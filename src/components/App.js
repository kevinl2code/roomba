import React from 'react'
import Table from './Table'
import Summary from './Summary'
import output from '../processData'

class App extends React.Component {
    
    render() {
        return (
            <div className="ui container">
                <Table output={output}/>
                <Summary data={output[output.length - 1]}/>
            </div>
        )
    }
}

export default App