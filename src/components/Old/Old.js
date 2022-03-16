import React from 'react';
import Blog from '../../Blog/Blog';

const Old = ({ oldBlogs }) => {
    return (
        <div >
            <h2>Old</h2>
            <div className='blogParent'>
                {
                    oldBlogs.map(blog => (
                        <Blog key={blog.id} blog={blog} >
                        </Blog>
                    ))
                }
            </div>

        </div>
    );
};

export default Old;