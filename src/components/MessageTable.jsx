import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
import axiosClient from '../axios-client';
import TableSkeletor from './TableSkeletor';
import ReactPaginate from 'react-paginate';
import { useAuthContext } from '../contexts/AuthContext'
const MessageTable = () => {
    const [messages,setmessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const {setNotification, notification} = useAuthContext();
    useEffect(()=>{
       getmessages();
      },[])
    const getmessages = () => {
        setLoading(true);
        axiosClient.get('/messages').then((res)=>{
            setLoading(false);
            setmessages(res.data);
          }).catch((error)=>{
            console.log(error);
          });
    }
    // delete handler
    const deleteHandler = (m) => {
        if(!window.confirm("Are You Sure to Want delete This Blog??")){
            return
        }
        axiosClient.delete(`/messages/${m.id}`).then((res)=>{
            getmessages();
            setNotification("Message SuccessFully Deleted");
        }).catch((error)=>{
            console.log(error);
        })
    }

    // pagination
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 3;
   useEffect(()=>{
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(messages.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(messages.length / itemsPerPage));
   },[itemOffset, itemsPerPage, messages]);

    
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % messages.length;
        setItemOffset(newOffset);
    };
  return (
    <>
            <div className="basis-[75%] px-4 md:px-[40px] py-[100px] overflow-auto flex-1">
                    <div className='flex items-start md:items-center justify-between mx-[20px] mb-[30px]'>
                        <h2 className='font-medium text-lg md:text-2xl text-black dark:text-white dark:text-white'>All Message</h2>
                        {/* <button className='flex space-x-1 items-center bg-[rgb(105,142,255)] text-white py-[10px] px-[20px] rounded-md'><GrFormAdd className='text-white text-lg'/><span className='font-medium'>Create</span></button> */}
                    </div>
                    {loading ?(
                    <TableSkeletor/>
                ) : (
            <div className="overflow-auto shadow-lg border border-transparent rounded-lg p-[2rem] dark:bg-[#0B1120]">
            <table class="divide-y divide-gray-300 w-full ">
                    <thead class="bg-transparent">
                        <tr>
                            <th class="px-6 py-2 text-xs text-gray-500">
                                ID
                            </th>
                            <th class="px-6 py-2 text-xs text-gray-500">
                                Name
                            </th>
                            <th class="px-6 py-2 text-xs text-gray-500">
                                Email
                            </th>
                            <th class="px-6 py-2 text-xs text-gray-500">
                                Message
                            </th>
                            <th class="px-6 py-2 text-xs text-gray-500">
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-transparent divide-y divide-gray-300">
                    {currentItems.map((m)=>{
                        return(
                        <tr class="whitespace-nowrap">
                            <td class="px-6 py-4 text-sm text-gray-500">
                                {m.id}
                            </td>
                            <td class="px-6 py-4">
                                <div class="text-sm text-gray-500">
                                    {m.name}
                                </div>
                            </td>
                            <td class="px-6 py-4">
                                <div class="text-sm text-gray-500">
                                   {m.email}
                                </div>
                            </td>
                            <td class="px-6 py-4 text-sm text-gray-500">
                                {m.message}
                            </td>
                            
                            <td class="px-6 py-4">
                                <NavLink to="" onClick={(e)=>{deleteHandler(m)}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-400" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </NavLink>
                            </td>
                        </tr>
                       
                       )
                    })}
                          
                    </tbody>
                </table>
            </div>
                )}
                {notification && ( <div class="flex p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
                                                <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                                                <span class="sr-only">Info</span>
                                                <div>
                                                    <span class="font-medium">{notification}</span>
                                                </div>
                                                </div>)}
            <div className='flex items-center justify-center mt-[50px]'>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                    containerClassName="paginate-container"
                    pageLinkClassName='paginate-link'
                    previousLinkClassName='paginate-link'
                    nextLinkClassName='paginate-link'
                    activeClassName='paginate-active'
                />
            </div>
        </div>
    </>
  )
}

export default MessageTable