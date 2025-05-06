import React from 'react'
import { RiErrorWarningLine } from "react-icons/ri";
import { IoCheckmarkSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

const AIScore = ({ score }) => {
  return (
    <div className=" rounded-lg p-4 flex flex-col gap-4">
      
              <RiErrorWarningLine className="text-blue-500 text-2xl " />
    <div className="text-3xl font-bold text-black-600">{score}%</div>
    <h3 className="text-1xl font-semibold mb-2 text-gray-800">AI Video Score Summary</h3>
    <p className='text-gray-700 '>The presentation of talent is <strong className='text-black'>good.</strong> Check the breakdown summary of AI Video Score.</p>
      <div className='flex justify-between gap-3 w-full'>
        <button className='p-2 w-1/2 justify-center bg-transparent border-1 flex gap-1 items-center rounded-md border-gray-500'>
        <IoCheckmarkSharp className='text-[#19b087] text-xl font-semibold'/>
          Shortlist
        </button>
        <button className='p-2 w-1/2 justify-center bg-transparent border-1 flex gap-1 items-center rounded-md border-gray-500'>
        <IoCloseSharp className='text-red-600 text-xl font-semibold'/>
          Reject
        </button>
      </div>
      <button className='w-full p-3 bg-blue-500 cursor-pointer rounded-md text-xl text-white'>
        Hire talent
      </button>
  </div>
  )
}

export default AIScore