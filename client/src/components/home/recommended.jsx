import React from 'react'
import { Play } from '../../assets'
import './style.scss'

const Recommended = ({data}) => {
  return (
    <div className='recommended'>
      <div className="title">
        <h5>Recommended</h5>
      </div>
      <div className="grid">
        {
          data?.map((elm, key) => {
            return (
              <div className="card" key={key}>
                <div>
                  <img src={elm?.thumbnail} alt="" />
                </div>
                <div className="details">
                  <h5>{elm?.title}</h5>
                  <p>{elm?.extract}</p>
                </div>

                <div className="play">
                  <button>
                    <Play
                      width={'16px'}
                      height={'16px'}
                    />
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Recommended
