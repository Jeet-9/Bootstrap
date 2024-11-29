import React from 'react'
import profilePic1 from "../components/Me.jpg"
import profilePic2 from "../components/Me2.jpg"
import profilePic3 from "../components/Me3.jpg"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <div className="pb-4 lb:mb-36">
        <div className="flex flex-wrap lg:flex-row-reverse">
            <div className="w-full lg:w-1/2">
                <div className="flex justify-center lg:p-8">
                    <img src={profilePic2} alt="Jeet Dadhaniya" className='border border-stone-900 rounded-3xl'/>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start mt-10">
                    <h2 className="pb-2 text-4xl tracking-tighter lg:text-8x1">Jeet Dadhaniya</h2>
                    <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">Full Stack Developer</span>
                    <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
                    {"I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences."}
                    </p>
                        <a href="https://drive.google.com/file/d/1tHHbIqOjhtSn5n2-P9qtgbGEOX2iu9jW/view?usp=sharing" target="_blank" rel="noopener noreferrer" download className="bg-white rounded-full p-4 text-sm text-stone-800 mt-6 mb-10"> Download Resume </a> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
