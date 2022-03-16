import { format } from 'date-fns';
import React from 'react';
import "./Blog.css"

const Blog = ({ blog }) => {
    return (
        <div className="blogContent">
            <div>
                {blog.title !== "NULL" && <h4 className='title'>{blog.title}</h4>}
                {blog.title === "NULL" ? <p>{blog.body.slice(0, 300) + "..."}</p> : <p>{blog.body.slice(0, 120) + "..."}</p>}

                <small className='date'>{format(new Date(blog.datetime), "MMM d,yyyy | K:mm b")}</small>
            </div>

            <div>
                {blog.image !== "NULL" && <img src={blog.image} alt='blog'></img>}
            </div>
        </div>
    );
};

export default Blog;