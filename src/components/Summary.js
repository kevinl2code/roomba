import React from 'react'

const Summary = ({ data }) => {
    const { location, dirtCollected, distance, wallHits } = data

    return (
        <div class="ui cards">
            <div class="card">
                <div class="content">
                    <div class="header">SUMMARY</div>
                    <div class="description">
                        {`Final Position: ${location}`}
                    </div>
                    <div class="description">
                        {`Total Dirt Collected: ${dirtCollected}`}
                    </div>
                    <div class="description">
                        {`Total Distance Traveled: ${distance}`}
                    </div>
                    <div class="description">
                        {`Total Walls Hit: ${wallHits}`}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Summary