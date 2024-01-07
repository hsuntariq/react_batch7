import React from 'react'

const Events = () => {
    const handleClick = () => {
        console.log('hello world')
    }
    return (
        <>

            <h1>
                hello
            </h1>
            <button onClick={() => console.log('hello')}>Click me</button>
        </>
    )
}

export default Events