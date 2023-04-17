import React from 'react'
import { Carousel } from '../components'
import Recommended from '../components/home/recommended'
import Musics from '../components/musics/musics'

const Home = () => {
  return (
    <div className='container'>
      <Carousel
        title={'Featured'}
      />
      <Recommended />
      <Musics
        title={'New Featured'} />
    </div>
  )
}

export default Home
