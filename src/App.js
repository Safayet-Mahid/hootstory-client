import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Recent from './components/Recent/Recent';
import Old from './components/Old/Old';
import logo from "./images/logo-hootstory.png"



function App() {
  const [blogs, setBlogs] = useState([])
  const [displayShort, setDisplayShort] = useState(true)
  const [displayLong, setDisplayLong] = useState(true)
  useEffect(() => {
    fetch("https://hootstory.herokuapp.com/blogs")
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, [blogs])
  const displayBlog = displayLong === false && displayShort === true ? blogs.filter(blog => blog.type !== "long") : displayLong === true && displayShort === false ? blogs.filter(blog => blog.type !== "short") : displayLong === false && displayShort === false ? [] : blogs

  const recentBlogs = displayBlog.filter(blog => blog.datetime.startsWith("2022"))
  const oldBlogs = displayBlog.filter(blog => !blog.datetime.startsWith("2022"))

  return (
    <div className="App">
      <div className='logo'>
        <img src={logo} alt="logo" />
        <h3>Hootstory</h3>
      </div>
      <div className='inner'>
        <Navbar blogs={blogs} setDisplayLong={setDisplayLong} setDisplayShort={setDisplayShort} displayShort={displayShort} displayLong={displayLong} displayBlog={displayBlog} />
        <Recent recentBlogs={recentBlogs} ></Recent>
        <Old oldBlogs={oldBlogs}></Old>
      </div>
    </div >
  );
}

export default App;
