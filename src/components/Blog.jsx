import React from 'react'

const Blog = ({title,author}) => {
  return (
    <div className='p-4 bg-white shadow-xs mb-4 rounded'>
        <h2 className='font-bold text-gray-600 text-xl'>{title}</h2>
        <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam saepe, dolorem doloribus illum possimus dolorum beatae harum vel sit porro ipsa reprehenderit explicabo delectus in ducimus amet magnam dolores, necessitatibus eos atque animi optio illo accusamus ullam! Corporis, eligendi a sed assumenda exercitationem accusamus error saepe repellat temporibus consequuntur commodi.</p>
        <p>Author: <span className='font-bold text-gray-800'>{author}</span></p>
    </div>
  )
}

export default Blog

