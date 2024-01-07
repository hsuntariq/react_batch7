import React, { useState } from 'react'
import SingleBirthday from './SingleBirthday'
import { birthdays } from './data'

const Birthday = () => {
    const [data, setData] = useState(birthdays)
    const handleUpdate = () => {
        if (data.length === 0) {
            setData(birthdays)
        } else {
            setData([])
        }
    }

    const removePerson = (id) => {
        let newList = data.filter((person) => {
            return person.id !== id;
        })
        setData(newList)


    }

    return (
        <>
            <div className="col-lg-6 shadow mx-auto p-5 mt-4">
                <h1 className="text-center display-3">
                    {data.length} birthdays today
                </h1>
                {data.map((birth) => {
                    return <SingleBirthday {...birth} remove={removePerson} />
                })}

                <button onClick={handleUpdate} className={`d-block mx-auto btn ${data.length === 0 ? 'btn-success' : 'btn-danger'}`}>
                    {data.length === 0 ? 'Refresh All' : 'Remove All '}
                </button>

            </div>
        </>
    )
}

export default Birthday