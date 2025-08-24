import React from 'react'
import type { Project } from '../interfaces/Project'

interface TimelineBoxProps {
  data: Project
  showDate?: boolean
}

const TimelineBox: React.FC<TimelineBoxProps> = ({ data, showDate }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 w-full dark:bg-gray-800">
    <h3 className="font-bold text-lg mb-2">{data.title}</h3>
    {showDate && <div className="text-gray-500 text-sm mb-2">{data.date}</div>}
    <p className="text-gray-600 dark:text-white">{data.description}</p>
    <div className="mt-4">
      {data.technology.map((tech, index) => (
        <span
          key={index}
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 dark:bg-gray-700 dark:text-gray-300"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
)

export default TimelineBox
