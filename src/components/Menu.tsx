import React from 'react'
import { FaMoon } from 'react-icons/fa6'
import { FiSun } from 'react-icons/fi'

interface MenuProps {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
}
const Menu: React.FC<MenuProps> = ({ darkMode, setDarkMode }) => {
  const handleToggle = () => {
    setDarkMode(!darkMode)
  }

  return (
    <nav className="bg-gray-800 p-4 lg:fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between">
        <a href="/" className="text-white font-bold text-lg uppercase">
          Vincent Bärtsch
        </a>
        <ul className="flex space-x-8">
          <li>
            <a
              href="#about"
              className="text-white hover:text-baertsch-red transition-colors uppercase"
            >
              Über mich
            </a>
          </li>
          <li>
            <a
              href="#projekte"
              className="text-white hover:text-baertsch-red transition-colors uppercase"
            >
              Projekte
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-white hover:text-baertsch-red transition-colors uppercase"
            >
              Skills
            </a>
          </li>
          <li
            onClick={handleToggle}
            className="mt-[0.125rem] text-white hover:text-yellow-400 transition-colors cursor-pointer"
          >
            {darkMode ? <FiSun /> : <FaMoon />}
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Menu
