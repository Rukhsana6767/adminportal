import React from 'react'
import { IoSearch } from "react-icons/io5";

const page = () => {
  return (
    <div className='searchBox position-relative flex items-center'>
        <IoSearch className='mr-1'/>
      <input type="text" placeholder='Search here.....' />
    </div>
  )
}

export default page
