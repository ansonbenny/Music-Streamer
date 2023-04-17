import React from 'react'
import './style.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="inner">
        <p>@ Copyright {new Date().getFullYear()} Music Theme. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
