import { useState } from "react"
import './counter.css'
const Counter = () => {
    const [count, setCount] = useState(0)
    const changeVal = (e) => {
        if (e.target.innerHTML === 'Increase') {
            setCount(count + 1)
        } else if (e.target.innerHTML === 'Reset') {
            setCount(0)
        } else {
            setCount(count - 1)
        }
    }
    return (
        <>
            <div className="container text-center p-2 shadow col-lg-5 mx-auto">
                <h1 className="display-1">
                    Counter
                </h1>
                <h1 className={`display-1 ${count === 0 && 'text-warning'}`} style={{
                    color: `${count > 0 ? 'green' : 'red'}`,

                }} >{count}</h1>
                <button onClick={changeVal} className="btn btn-danger mx-3">Decrease</button>
                <button onClick={changeVal} className="btn btn-warning mx-3">Reset</button>
                <button onClick={changeVal} className="btn btn-success mx-3">Increase</button>
            </div>
        </>
    )
}

export default Counter