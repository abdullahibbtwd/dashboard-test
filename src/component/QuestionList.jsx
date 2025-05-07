import React, { useState } from 'react'
import { RiErrorWarningLine } from "react-icons/ri";

const QuestionList = () => {

  const [activeIndex, setActiveIndex] = useState(null);
  const items = [
    { id: 1, text: 'Tell us about yourself.' },
    { id: 2, text: 'Why do you think you are good at something?' },
    { id: 3, text: 'What is N you have?' },
    { id: 4, text: 'Another question here.' },
    { id: 5, text: 'Another question here.' },
  ];
  const activeColor = 'bg-blue-500 border-blue-500';
  const defaultColor = 'bg-gray-400 border-gray-400';

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative p-4 bg-white rounded-md">
      <div className='flex justify-between px-2 mb-5 items-center'>
        <h3 className="text-2xl font-semibold">Questions List</h3>
        <RiErrorWarningLine className="text-blue-500 text-2xl " />
      </div>
      
    {items.map((item, index) => (
      <div key={item.id} className="relative pl-8 mb-6 cursor-pointer" onClick={() => handleItemClick(index)}>
        <div
          className={`absolute top-0 z-1  left-0 w-8 h-8 rounded-full text-white flex items-center justify-center text-sm font-bold ${
            activeIndex !== null && index <= activeIndex ? activeColor : defaultColor
          }`}
        >
          {item.id}
        </div>
        <p className={`text-gray-800 z-1 font-semibold ml-5 ${activeIndex !== null && index <= activeIndex ? 'text-black-800 text-xl' : ''}`}>
          {item.text}
        </p>

        {index < items.length - 1 && (
          <div
            className={`absolute top-6 left-4 h-20 border-l-2  border-1 ${
              activeIndex !== null && index < activeIndex ? 'border-blue-500' : 'border-gray-400'
            }`}
          ></div>
        )}
      </div>
    ))}
  </div>
  //   <div className="bg-white rounded-lg shadow-md p-4">
  //   <h3 className="text-lg font-semibold mb-2">Questions</h3>
  //   <ul className="list-decimal pl-5">
  //     {questions.map((question, index) => (

  //       <div className='relative'>
  //       <p className={`w-6 flex items-center justify-center h-6 rounded-full border-1 mb-5 text-gray-700 border-gray-400 font-semibold ${index === currentQuestionIndex || index >= currentQuestionIndex ? 'bg-green-600 text-white':'bg-white'}`}>{index+1}</p>
  //         <div className='absolute top-6 left-3 h-8 border-l-2 border-dashed border-gray-400'>

  //         </div>
  //         {/* <li
  //         key={index}
  //         className={`mb-1 ${index === currentQuestionIndex ? 'font-semibold text-black  text-xl ' : 'text-gray-700'}`}
  //       >
  //         {question}
  //       </li> */}
  //       </div>
      
  //     ))}
  //   </ul>
  // </div>
  )
}

export default QuestionList