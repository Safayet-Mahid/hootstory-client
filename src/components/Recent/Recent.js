import React from 'react';
import Blog from '../../Blog/Blog';
import "./Recent.css"

const Recent = ({ recentBlogs }) => {



    return (
        <div className="recentComp"  >
            <h2>Recent</h2>
            <div className='blogParent'>
                {
                    recentBlogs.map(blog => (
                        <Blog key={blog.id} blog={blog}>
                        </Blog>
                    ))
                }
            </div>

        </div>
    );
};

export default Recent;