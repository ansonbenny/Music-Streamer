import React, { Fragment } from 'react'
import { MagnifyingGlass, MenuBar } from '../../assets'
import './style.scss'

const Header = ({ contentRef, menuRef }) => {
  return (
    <Fragment>
      <div className='Header'>
        <div className="inner">
          <div className="logo_menu">
            <div className='bar'>
              <button onClick={() => {
                if (matchMedia('(max-width:767px)').matches) {
                  // Small Device

                  menuRef?.current?.classList?.add('showSm')
                } else if (menuRef?.current) {
                  // Medium plus devices

                  contentRef?.current?.classList?.remove("expand")
                  menuRef?.current?.classList?.add('showMd')
                }
              }}>
                <MenuBar
                  height={'16px'}
                  width={'16px'}
                  color={'#888'}
                />
              </button>
            </div>
            <div className='logo' >
              <div className='dot' />
            </div>
            <div>
              <h1>Musicon</h1>
            </div>
          </div>

          <div className="search">
            <MagnifyingGlass
              width={'16px'}
              height={'16px'}
            />
            <input type="text" placeholder='Search...' />
          </div>
        </div>
      </div>

      <div className="spaceHeader" />
    </Fragment>
  )
}

export default Header
