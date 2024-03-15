import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Blogs from './components/header/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <main className=' container mx-auto md:flex'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </main>
    </>
  )
}

export default App
