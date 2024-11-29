import React from 'react'
import { RiReactjsLine } from "react-icons/ri"
import { FaCss3 } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";

const Technologies = () => {
  return (
    <div className="pb-24">
        <h2 className="my-20 text-center text-4xl">Technologies</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="p-4">
                    <FaHtml5 className="text-7xl" color='#E2522C' />
                </div>
                <div className="p-4">
                    <FaCss3 className="text-7xl" color='#0870C2' />
                </div>
                <div className="p-4">
                    <IoLogoJavascript className="text-7xl" color='#F7E025' />
                </div>
                <div className="p-4">
                    <FaBootstrap className="text-7xl" color='#8D1AFF' />
                </div>
                <div>
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </div>
            </div>
    </div>
  )
}

export default Technologies