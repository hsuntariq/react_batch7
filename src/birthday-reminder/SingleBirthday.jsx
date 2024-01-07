import React from 'react'

const SingleBirthday = ({ id, name, image, age, remove }) => {
    return (
        <>
            <div className="d-flex justify-content-between align-items-center my-2">
                <div className="user-info d-flex gap-3">
                    <div className="user-image">
                        <img style={{ width: '70px', height: '70px', clipPath: 'circle()' }} src={image} alt="" />
                    </div>
                    <div className="names">
                        <h5>{name}</h5>
                        <h6>{age} years</h6>
                    </div>
                </div>
                <div className="button">
                    <button onClick={() => remove(id)} className="btn btn-danger">
                        Remove
                    </button>
                </div>
            </div>
        </>
    )
}

export default SingleBirthday