import React, { useState, useEffect, useContext } from 'react'
import { flyContext } from '../context/FlyContext'
import FlyList from './FlyList'
import FlyButtons from './FlyButtons'


const SortFlights = () => {
    const { flights } = useContext(flyContext);
    const [searchValue, setSearchValue] = useState('')
    const [filteredFlights, setFilteredFlights] = useState([])
    const [choice, setChoice] = useState();

    useEffect(() => {
        let sortedFlights = flights.filter(flight => flight.company.indexOf(searchValue) !== -1)
        if (sortedFlights.length > 0) {
            if (choice === 'HighToLow') {
                sortedFlights = sortedFlights.sort((flightA, flightB) => flightB.amount - flightA.amount)
            } else {
                sortedFlights = sortedFlights.sort((flightA, flightB) => flightA.amount - flightB.amount)
            }
            setFilteredFlights(sortedFlights)
        }
    }, [searchValue, choice])
    return (
        <div>
            <FlyButtons />
            <div style={{ width: '100%', textAlign: 'center' }}>
                <label>Search</label>
                <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.currentTarget.value)} />
                <select
                    value={choice}
                    defaultValue={"HighToLow"}
                    onChange={(e) => setChoice(e.target.value)}>
                    <option value="LowToHigh">Lowest Amount</option>
                    <option value="HighToLow">Highest Amount</option>
                </select>
                <br />
                <br />
                <br />
                {filteredFlights.length > 0 ?
                    <FlyList flights={filteredFlights} />
                    :
                    <FlyList flights={flights} />
                }
            </div>
        </div>
    )
}

export default SortFlights
