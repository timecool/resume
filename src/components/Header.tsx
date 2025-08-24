import React from 'react';
import mainLight from '../assets/main_light.jpg';
import mainDark from '../assets/main_night.jpg';
import lebenslaufPdf from '../assets/pdfs/Lebenslauf.pdf';

const Header: React.FC = () => (
    <header className="py-6 px-4 text-center flex items-center justify-center flex-col gap-3 lg:h-[70vh] dark:bg-gray-900">
        <img 
            src={mainLight} 
            alt="Profilbild" 
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60 rounded-full mx-auto mb-3 object-cover dark:hidden"
        />
        <img 
            src={mainDark} 
            alt="Profilbild" 
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60 rounded-full mx-auto mb-3 object-cover hidden dark:block"
        />
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold dark:text-white">Webentwickler und mehr</h1>
        <h2 className="text-gray-500">
            Leidenschaftlicher Entwickler, kreativer Problemlöser und lebenslanger Lerner
        </h2>
        <a
            href={lebenslaufPdf}
            download="Lebenslauf.pdf"
            className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 inline-block text-sm sm:text-base dark:bg-purple-900 dark:hover:bg-purple-800"
        >
            Lebenslauf herunterladen
        </a>
    </header>
);

export default Header;
