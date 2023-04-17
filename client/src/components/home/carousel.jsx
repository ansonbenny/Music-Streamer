import React, { useEffect, useRef } from 'react'
import { Play } from '../../assets'
import demo from '../../assets/demo2.jpg'
import './style.scss'

const Carousel = ({ title }) => {
    const loop = [1, 2, 343, 4, 545, 56, 6, 6, 766]
    let ref = useRef()
    return (
        <div className='carousel'>
            <div className="title">
                <h5>{title}</h5>
            </div>
            <div className="grid" ref={ref}>
                {
                    loop?.map((elm, key) => {
                        return (
                            <div className='card' key={key}>
                                <img className='scrollImg' src={demo} />
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

export default Carousel
