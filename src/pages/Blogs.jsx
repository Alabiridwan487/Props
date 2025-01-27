import React from 'react'
import Blog from '../components/Blog'

const Blogs = () => {
  return (
    <>

    <main className='bg-gray-100 px-[300px] min-h-screen pt-4'>
    <Blog title='This is the first blog' author='Kitan'/>
    <Blog title='This is the second blog' author='Ayo'/>
    <Blog title='This is the third blog' author='Gbenga'/>
    <Blog title='This is the fourth blog' author='Damola'/>
    <Blog title='This is the fifth blog' author='Alex'/>
    </main>
    </>
  )
}

export default Blogs