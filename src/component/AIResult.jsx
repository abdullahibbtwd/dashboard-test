import React from 'react'

const AIResult = ({ metrics }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
    <h3 className="text-lg font-semibold mb-2">AI Result Metrics</h3>
    <ul className="list-none">
      {Object.entries(metrics).map(([metric, value]) => (
        <li key={metric} className="mb-2">
          <span className="text-gray-700">{metric}:</span> <span className="font-semibold">{value}</span>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default AIResult