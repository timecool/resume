import React from 'react'
import mainLight from '../assets/main_light.jpg'
import mainDark from '../assets/main_night.jpg'
import lebenslaufPdf from '../assets/pdfs/Lebenslauf.pdf'
import Robot from './Robot'

const Header: React.FC = () => (
  <header className="py-6 px-4 text-center flex items-center justify-center flex-col gap-3 lg:h-[70vh] relative dark:bg-gray-900 ">
    <Robot />
    <img
      src={mainLight}
      alt="Profilbild"
      className="w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60 rounded-full mx-auto mb-3 object-cover dark:hidden pointer-events-none"
    />
    <img
      src={mainDark}
      alt="Profilbild"
      className="w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60 rounded-full mx-auto mb-3 object-cover hidden dark:block pointer-events-none"
    />
    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold dark:text-white">
      Webentwickler und mehr
    </h1>
    <h2 className="text-gray-500 lg:w-7xl">
      Leidenschaftlicher Entwickler, kreativer Problemlöser und lebenslanger
      Lerner
    </h2>
    <a
      href={lebenslaufPdf}
      download="Lebenslauf.pdf"
      className="mt-3 px-4 py-2 bg-baertsch-red text-white rounded-md hover:font-bold inline-block text-sm sm:text-base z-20"
    >
      Lebenslauf herunterladen
    </a>
  </header>
)

export default Header
