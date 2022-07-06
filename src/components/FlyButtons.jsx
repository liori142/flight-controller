import React from 'react'
import {useNavigate} from 'react-router-dom'

const FlyButtons = () => {
    const navigate = useNavigate()
    const buttonStyle = {textAlign:'center',cursor:'pointer', display:'flex', color:'white', fontSize:'large',justifyContent:'center' ,alignItems:'center', background:'blue', marginRight:'10px', width:'20%',height:'50px'}
    return (
        <div style={{width:'100%', display: 'flex',justifyContent:'center', margin:'2%' }}>
            <div style={buttonStyle} onClick={()=>navigate('/control-panel')}>All Flights</div>
            <div style={buttonStyle} onClick={()=>navigate('/control-panel/sort')}>Filter Flights</div>
            <div style={buttonStyle} onClick={()=>navigate('/control-panel/add')} >Add Flight</div>
            <div style={buttonStyle} onClick={()=>navigate('/control-panel/delete')}>Delete Flight</div>
        </div>
    )
}

export default FlyButtons
