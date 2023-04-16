import React, { useLayoutEffect, useRef } from 'react'
import './style.scss'

const Loading = () => {
    let ref = useRef()

    useLayoutEffect(() => {
        let index = 0
        setInterval(() => {
            switch (index) {
                case 0:
                    ref?.current?.childNodes[0]?.classList?.add('dot-active')
                    ref?.current?.childNodes[1]?.classList?.remove('dot-active')
                    ref?.current?.childNodes[2]?.classList?.remove('dot-active')
                    break;
                case 1:
                    ref?.current?.childNodes[0]?.classList?.remove('dot-active')
                    ref?.current?.childNodes[1]?.classList?.add('dot-active')
                    ref?.current?.childNodes[2]?.classList?.remove('dot-active')
                    break;
                case 2:
                    ref?.current?.childNodes[0]?.classList?.remove('dot-active')
                    ref?.current?.childNodes[1]?.classList?.remove('dot-active')
                    ref?.current?.childNodes[2]?.classList?.add('dot-active')
                    break;
                default:
                    ref?.current?.childNodes[0]?.classList?.add('dot-active')
                    ref?.current?.childNodes[1]?.classList?.remove('dot-active')
                    ref?.current?.childNodes[2]?.classList?.remove('dot-active')
                    break;
            }

            if (index < 2) {
                index++
            } else {
                index = 0
            }
        }, 1000)
    }, [])

    return (
        <div className='loading' ref={ref}>
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
        </div>
    )
}

export default Loading
