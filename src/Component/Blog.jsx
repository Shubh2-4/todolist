import React from 'react'
import { blogs } from './Store/blogs'
import { Link } from 'react-router-dom'

export default function Blog() {
    return (
        <div>

            {blogs.map((item) => {
                return (
                    <div className='d-flex flex-row w-75 m-auto' key={item.id}>

                        <h1>{item.title}</h1>
                        <p>{item.body}</p>
                        <p><Link to={`/blog/${item.id}`}>Read more</Link></p>

                    </div>
                )
            })}

        </div>
    )
}
