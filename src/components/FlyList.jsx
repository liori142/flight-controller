import React from 'react'

const FlyList = ({flights}) => {
    return (
        flights.map((flight) =>
            <div style={{ width: "200px", margin: 'auto', textAlign: 'center', border: '1px #000 solid' }}>
                <h4>{flight.flightNumber}</h4>
                <h4>{flight.amount}</h4>
                <h4>{flight.company}</h4>
            </div>)
    )
}

export default FlyList
