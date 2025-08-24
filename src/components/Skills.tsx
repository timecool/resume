import React from 'react'
import { skillsByCategory } from '../data/skills'
import Container from './Container'

const getLevelPercent = (level: number) => `${(level / 5) * 100}%`

const Skills: React.FC = () => (
  <Container bgClassName="bg-gray-100 dark:bg-gray-800" id="skills">
    <h2 className="text-3xl font-bold mb-6">Skills</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {Object.entries(skillsByCategory).map(([category, skills]) => (
        <div
          key={category}
          className="bg-white rounded-lg shadow p-6 flex flex-col dark:bg-gray-700"
        >
          <h3 className="text-xl font-semibold mb-4">{category}</h3>
          <ul className="space-y-4">
            {skills.map((skill) => (
              <li key={skill.name}>
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium dark:text-white">
                    {skill.name}
                  </span>
                  <span className="text-sm text-gray-500">{skill.level}/5</span>
                </div>
                <div className="w-full bg-gray-200 rounded h-2">
                  <div
                    className="bg-baertsch-red h-2 rounded"
                    style={{ width: getLevelPercent(skill.level) }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Container>
)

export default Skills
