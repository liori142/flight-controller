import {createContext , useState} from "react";

const flyContext = createContext()  

const Parent = ({children}) => {
    const [flights , setFlights] = useState([{
        flightNumber: '12351231',
        amount: 100,
        company: 'El-Al',
       }]) 
       
    return ( 
        <div> 
            <flyContext.Provider value={ {flights , setFlights } } >
                {children}
            </flyContext.Provider> 
        </div>
    )
}

export {flyContext};
export default Parent;