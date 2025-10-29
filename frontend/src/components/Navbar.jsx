import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Navbar(){
  return (
    <header className="navbar">
      <div className="brand"> Sourav Shaw</div>
      <nav className="navlinks">
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href="https://github.com/hi-sourav-dev" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/sourav-shaw-a62264355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer"><FaLinkedin/></a>
      </nav>
    </header>
  )
}
