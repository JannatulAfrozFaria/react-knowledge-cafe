import { useEffect, useState } from "react";
import Blog from "../../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddBookmark,handleMarkAsRead}) => {
    const [ blogs, setBlogs] =useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className=" container mx-auto md:w-2/3">
            <h1 className="text-4xl">Blogs : {blogs.length} </h1>
            {
                blogs.map(blog => <Blog
                     key={blog.id} 
                     blog={blog} 
                     handleAddBookmark ={handleAddBookmark}
                     handleMarkAsRead ={handleMarkAsRead}
                     ></Blog> )
            }
        </div>
    );
};

Blogs.propTypes ={
    handleAddBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blogs;