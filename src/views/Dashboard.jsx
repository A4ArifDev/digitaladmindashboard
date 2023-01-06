import React, { useContext} from 'react'
import SideBar from '../components/SideBar'
import DashboardTable from '../components/DashboardTable'
const Dashboard = () => {
  return (
    <>
        <div className='w-[98%] md:w-[80%] bg-subBgLight dark:bg-subBgDark  rounded-lg h-screen md:h-[80vh] flex gap-0 md:gap-4 transition-all'>
            <SideBar/>
            <DashboardTable/>
        </div>
    </>
  )
}

export default Dashboard