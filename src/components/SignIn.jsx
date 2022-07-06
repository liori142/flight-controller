import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
const SignIn = () => {
    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const validateUser = () => {
        const defaultValue = '12345'
        if (userName === defaultValue && password === defaultValue){
            navigate('/control-panel')
        }
    }
    return (
        <div >
            <label>Username:</label>
            <input type="text" name="Username" value={userName} onChange={(e)=>setUsername(e.currentTarget.value)}/>
            <label>Password:</label>
            <input type="password" name="Password" value={password} onChange={(e)=>setPassword(e.currentTarget.value)}/>
            <button onClick={validateUser}>Log In</button>
        </div>
    )
}

export default SignIn
