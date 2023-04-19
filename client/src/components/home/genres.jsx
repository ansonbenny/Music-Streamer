import React from 'react'
import './style.scss'

const Genres = ({ data }) => {
    return (
        <div className='genres'>
            <div className="title">
                <h5>Genres</h5>
            </div>

            <div className="grid">
                {
                    data?.map((elm, key) => {
                        return (
                            <button key={key}>{elm}</button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Genres
