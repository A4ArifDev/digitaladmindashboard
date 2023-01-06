import React from 'react'
import AddingBlogForm from '../components/AddingBlogForm'
import SideBar from '../components/SideBar'
const AddBlog = () => {
  return (
    <div className='w-[98%] md:w-[80%] bg-subBgLight dark:bg-subBgDark  rounded-lg h-screen md:h-[80vh] flex gap-0 md:gap-4 transition-all'>
    <SideBar/>
    <AddingBlogForm/>
</div>
  )
}

export default AddBlog