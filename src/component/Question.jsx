import React, { useState } from 'react'

const Question = ({questions}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  return (
    <div>   
       <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
          {/* Placeholder for AI avatar */}
          <img src="placeholder_avatar.png" alt="AI Interviewer" className="w-10 h-10 object-contain" />
        </div>
        <h2 className="ml-3 text-xl font-semibold">AI Interviewer</h2>
      </div>
      <div className="mb-4 p-3 border rounded-md">
        <p className="text-lg">{questions[currentQuestionIndex]}</p>
      </div>
      {currentQuestionIndex < questions.length - 1 && (
        <button
          onClick={handleNextQuestion}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Next Question
        </button>
      )}
      {currentQuestionIndex === questions.length - 1 && (
        <p className="text-gray-600">Interview Finished</p>
      )}
    </div>
    </div>
  )
}

export default Question