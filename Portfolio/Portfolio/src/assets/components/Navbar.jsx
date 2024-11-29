import React from 'react'
import logo from '../components/Logo.webp'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
        <nav className='flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center'>
                <a href="/" aria-lebel="Home">
                    {/* <img src={logo} className='mx-2' width={50} height={33} alt='Logo'/> */}
                    <h1 className='mx-2 font-bold text-4xl flex text-purple-800'>J_<p className='mx-2 font-bold text-4xl text-white '>eet</p></h1>
                </a>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/jeet-dadhaniya-a6b140282/" target="_blank" rel="nopener noreferrer" aria-label="Linkdin">
                <FaLinkedin />
                </a>

                <a href="https://github.com/Jeet-9" target="_blank" rel="nopener noreferrer" aria-label="Github">
                <FaGithub />
                </a>

                <a href="https://www.instagram.com/the_jeet_009/" target="_blank" rel="nopener noreferrer" aria-label="Instagram">
                <FaInstagram />
                </a>

                <a href="https://x.com/the_jeet_9" target="_blank" rel="nopener noreferrer" aria-label="Linkdin">
                <FaTwitter />
                </a>
            </div>
        </nav>
    </div>
  )
}

export default Navbar