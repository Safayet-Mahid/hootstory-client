import React, { useEffect } from 'react';
// import  useEffect  from "react"
import { MdOutlineLibraryBooks } from "react-icons/md"
import { MdToggleOn, MdToggleOff } from "react-icons/md"
import "./Navbar.css"


const Navbar = ({ blogs, displayShort, displayLong, setDisplayShort, setDisplayLong, displayBlog }) => {


    const longStories = displayBlog.filter(blog => blog.type === "long").length
    const shortStories = displayBlog.filter(blog => blog.type === "short").length

    const handleDisplay = (type) => {
        if (type === "short") {
            setDisplayShort(!displayShort)
        }
        else if (type === "long") {
            setDisplayLong(!displayLong)
        }
    }

    const handleDelete = () => {
        const confirm = window.confirm("Are you sure you want to delete all the posts from this blog")
        confirm && fetch('https://hootstory.herokuapp.com/blogs', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },

        })
            .then(res => res.json())
            .then()

    }


    return (
        <nav>
            <ul>
                <li className='blog'><small><i><MdOutlineLibraryBooks /></i></small> Blog</li>
                <li ><button onClick={handleDelete} className='delete'>Delete all</button> </li>
                <li> <small>{longStories}</small> Long stories <button onClick={() => handleDisplay("long")}> {displayLong === true ? <MdToggleOn /> : <MdToggleOff />} </button></li>
                <li> <small>{shortStories}</small> Short stories <button onClick={() => handleDisplay("short")}>{displayShort === true ? <MdToggleOn /> : <MdToggleOff />} </button></li>

            </ul>
        </nav>
    );
};

export default Navbar;