import React from 'react'
import { Play } from '../../assets'
import './style.scss'

const Musics = ({ title, data, isArtist }) => {
  return (
    <div className='Musics'>
      <div className="title">
        <h5>{title}</h5>
      </div>

      <div className="grid">
        {
          data?.map((elm, key) => {
            return (
              <div className="card" key={key}>
                <div className="thumb">
                  <img className={isArtist ? 'rounded' : ''} src={elm?.thumbnail} alt="" />
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
                      color={'#333'}
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

export default Musics
