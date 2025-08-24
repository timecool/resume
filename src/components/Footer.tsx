import React from 'react'
import { FaGithub } from 'react-icons/fa6'
import { IoLogoLinkedin } from 'react-icons/io'
import Container from './Container'

const Footer: React.FC = () => (
  <Container className=" text-gray-600">
    <h2>Lass uns zusammenarbeiten!</h2>
    <div className="flex text-5xl gap-5 justify-center items-center dark:text-white text-center ">
      <a
        target="_blank"
        className="hover:text-baertsch-red"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/vincent-b%C3%A4rtsch-b732741b3/"
      >
        <IoLogoLinkedin />
      </a>
      <a
        target="_blank"
        className="hover:text-baertsch-red"
        rel="noopener noreferrer"
        href="https://github.com/timecool"
      >
        <FaGithub />
      </a>
    </div>
    <a
      href="https://www.kanzleibaertsch.com/impressum"
      target="_blank"
      className="hover:text-baertsch-red transition-colors text-sm float-right "
    >
      Impressum
    </a>
  </Container>
)

export default Footer
