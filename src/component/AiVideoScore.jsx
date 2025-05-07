import React from 'react'
import ScoreCard from './ScoreCard'

const AiVideoScore = () => {
 
  return (
    <div className="bg-white rounded-lg p-4">
    <h3 className="text-lg font-semibold mb-2">AI Video Score Detail</h3>
      <div className='grid grid-cols-2 gap-4'>

    
            <ScoreCard />
     
      </div>
  </div>
  )
}

export default AiVideoScore