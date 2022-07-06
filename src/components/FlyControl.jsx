import React,{useContext} from 'react'
import FlyButtons from './FlyButtons'
import FlyList from './FlyList'
import { flyContext } from '../context/FlyContext'
 

const FlyControl = () => {
    const {flights} = useContext(flyContext)
    return (
        <div>
            <FlyButtons/>
            <FlyList flights={flights}/>
        </div>
    )
}

export default FlyControl
