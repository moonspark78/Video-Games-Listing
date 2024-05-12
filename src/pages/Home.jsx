import React from 'react'

const Home = () => {
  return (
    <div className='grid grid-cols-4'>
      <div className='hidden md:block'>Genres</div>
      <div className='col-span-4 md:col-span-3'>Games List</div>
    </div>
  )
}

export default Home