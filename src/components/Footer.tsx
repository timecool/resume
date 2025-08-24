import React from 'react';
import { FaGithub } from 'react-icons/fa6';
import { IoLogoLinkedin } from 'react-icons/io';

const Footer: React.FC = () => (
    <footer className="w-full py-4 text-center bg-gray-100 text-gray-600">
        <h2>Lass uns zusammenarbeiten!</h2>
        <br />
        <div className='flex text-5xl gap-5 justify-center items-center'>
            <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/vincent-b%C3%A4rtsch-b732741b3/'>
                <IoLogoLinkedin />
            </a>
            <a target='_blank' rel='noopener noreferrer' href='https://github.com/timecool'>
                <FaGithub />
            </a>
        </div>

    </footer>
);

export default Footer;