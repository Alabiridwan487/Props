import React from 'react'
import Sidebar from '../components/Sidebar'
import Main from '../components/Main'
import RightSidebar from '../components/RightSidebar'

const Home = () => {
  return (
    <>
      <main className='w-[100%] flex items-center'>
        <Sidebar/>
        <Main/>
        <RightSidebar/>
      </main>
    </>
  )
}

export default Home