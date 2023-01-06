import React from 'react'
import BlogTable from '../components/BlogTable'
import SideBar from '../components/SideBar'
const Blogs = () => {
   
  return (
    <>
        <div className='w-[98%] md:w-[80%] bg-subBgLight dark:bg-subBgDark  rounded-lg h-screen md:h-[80vh] flex gap-0 md:gap-4 transition-all'>
            <SideBar/>
            <BlogTable/>
        </div>
    </>
  )
}

export default Blogs