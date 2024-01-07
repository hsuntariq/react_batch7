import { useState } from "react"

const Conditions = () => {
    const [test, setTest] = useState(0);

    return (
        <>
            <h1 className="text-center">{test && 'Hello from the AND operator'}</h1>
            <h1 className="text-center">{test || 'Hello from the OR operator'}</h1>
            {test ?
                <h1>Hello from the true side</h1>
                :
                <h1>Hello from the false side</h1>
            }
        </>
    )
}

export default Conditions