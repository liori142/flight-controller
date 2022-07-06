import React, { useState, useContext } from 'react'
import FlyButtons from './FlyButtons'

import { flyContext } from '../context/FlyContext'

const DeleteFlight = () => {
    const { flights, setFlights } = useContext(flyContext);
    const [flightNumber, setFlightNumber] = useState()

    const removeFlightHandler = ()=>{
        const flightIndex = flights.findIndex(flight=>flight.flightNumber ===flightNumber)
        if(flightIndex !== -1){ 
            flights.splice(flightIndex, 1)
            setFlights(flights)
            alert('flight removed')
        }else{
            alert('flight number not found')
        }
    }
    return (
        <div style={{width:'100%' ,textAlign: 'center'}}>
            <FlyButtons/>
            <input type="text" value={flightNumber} onChange={(e)=>setFlightNumber(e.currentTarget.value)}></input>
            <button onClick={removeFlightHandler}>Delete</button>
        </div>
    )
}

export default DeleteFlight
