import React, { useState } from 'react'
import useForm from './hooks/useForm'

function FormHook() {
    const [email, emailChange, emailReset] = useForm("");
    return (
        <div>
            <h3>the value is: {email}</h3>
            <input type="text" value={email} onChange={emailChange} />
            <button onClick={emailReset}>reset</button>
        </div>
    )
}

export default FormHook
