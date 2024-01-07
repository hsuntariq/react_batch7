import React, { useState } from 'react'

const UseStateBasics = () => {
    const [name, setName] = useState('Ali');
    const handleClick = () => {
        setName('Ahmed')
    }
    return (
        <>
            <h1> {name} </h1>
            <button onClick={handleClick}>Change Title</button>
        </>
    )
}

export default UseStateBasics