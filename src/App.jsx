import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Blogs from './components/header/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
  const [bookmarks,setBookmarks] =useState([]);
  const handleAddBookmark = blog =>{
      const newBookmarks = [...bookmarks,blog];
      setBookmarks(newBookmarks)
  }

  const [readingTime,setReadingTime] = useState(0);
  const handleMarkAsRead = (id,time) =>{
    setReadingTime(readingTime + time);
    //remove the blog from bookmark
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }

  return (
    <>
      <Header></Header>
      <main className='md:flex gap-2'>
      <Blogs 
      handleAddBookmark ={handleAddBookmark} 
      handleMarkAsRead={handleMarkAsRead} ></Blogs>
      <div>
          <Bookmarks bookmarks={bookmarks} readingTime={readingTime} ></Bookmarks>
      </div>
      </main>
    </>
  )
}

export default App
