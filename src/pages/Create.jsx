import React, { useState } from 'react'

const Create = () => {
    
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [image, setImage] = useState(null)
    const [author, setAuthor] = useState('')

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Form submission logic, e.g., uploading data to an API
        console.log({ title, content, image, author });
    
        setTitle('');
        setContent('');
        setImage(null);
        setAuthor('');
      };


    return (
        <main className='bg-gray-100 flex items-center min-h-screen flex-col'>
            <div className='mt-20'>
                <h2 className='text-center font-bold text-2xl underline text-slate-800'>Add a blog</h2>
                <form onSubmit={handleSubmit} action="" className='shadow-xl p-10 bg-white rounded mt-10'>
                    <div>
                        <label htmlFor="">Title:</label>
                        <input 
                        value={title} 
                        className='rounded shadow-xs p-2 bg-gray-100 w-full mb-2' 
                        type="text" 
                        placeholder='Title' 
                        onChange={(e) => setTitle(e.target.value)}
                        />
                        
                    </div>

                    <div>
                        <label htmlFor="">Content</label>
                        <textarea 
                        value={content} 
                        className='h-20 w-full bg-gray-100 shadow-xs p-2 mb-2' 
                        name="" id=""
                        onChange={(e) => setContent(e.target.value)}
                        placeholder='Write your content...'
                        >
                        </textarea>
                    </div>

                    <div>
                        {/* <label htmlFor="">Images</label> */}
                        <input 
                        value={image} 
                        type="file" 
                        className='bg-gray-100 p-2 shadow-xs mb-2' 
                        onChange={(e) => setImage(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="">Author:</label>
                        <select 
                        value={author} 
                        name="" id="" 
                        className='ms-2 bg-gray-100 p-2 shadow-xs'
                        onChange={(e) => setAuthor(e.target.value)}
                        >
                            <option value="">Select Author</option>
                            <option value="Olakitan">Olakitan</option>
                            <option value="Abidemi">Abidemi</option>
                            <option value="Olajuwon">Olajuwon</option>

                        </select>

                    </div>
                    <button className='w-full py-1 text-center rounded bg-blue-500 hover:bg-blue-300 mt-4 text-white' type='submit'>Add blog</button>
                </form>
            </div>
        </main>
    )
}

export default Create
