import React, { useState, useContext } from 'react'
import { flyContext } from '../context/FlyContext'
import FlyButtons from './FlyButtons'

const AddFlight = () => {
    const { flights, setFlights } = useContext(flyContext);
    const [flightNumber, setFlightNumber] = useState('')
    const [amount, setAmount] = useState('')
    const [company, setCompany] = useState('')

    const addFlightHandler = () => {
        const isFlightNumberExists = flights.find(flight => flight.flightNumber === flightNumber)
        const isCompanyNameOk = company.length > 1
        const isAmountOk = amount > 1 && amount < 450

        if (!isFlightNumberExists && isCompanyNameOk && isAmountOk) {
            setFlights([...flights, { flightNumber, amount, company }])
            alert('Success!')
        }
        if (isFlightNumberExists) { alert('Change Flight Number!') }
        if (!isCompanyNameOk) { alert('Company Name Not Good!') }
        if (!isAmountOk) { alert('Amount Not Good!') }
    }
    return (
        <div>
            <FlyButtons />
            <div style={{width: '100%',textAlign: 'center'}}>
                <label>Flight Number:</label>
                <input type="number" value={flightNumber} onChange={(e) => setFlightNumber(e.currentTarget.value)} />
                <label>Amount:</label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.currentTarget.value)} />
                <label>Company:</label>
                <input type="text" value={company} onChange={(e) => setCompany(e.currentTarget.value)} />
                <button onClick={addFlightHandler}>Add</button>
            </div>
        </div>
    )
}

export default AddFlight
