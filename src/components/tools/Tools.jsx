import React from 'react'
import { motion } from 'framer-motion'
import icon from '../../../public/icons/Vite.js.png'
import logo from '../../../public/icons/logo.svg'
import { FaBootstrap } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";


export default function Tools() {
    return (
        <section className='my-[4em] min-h-[80vh]'>
            <motion.span id='tools' className='text-sky-500  mb-[3em] flex justify-center font-bold text-3xl p-2 w-[220px] m-auto shadow-md rounded-md shadow-gray-400 bg-gray-50 ' initial={{ scale: 0 }} viewport={{ once: true, amount: 1 }} whileInView={{ scale: 1 }} transition={{ type: "spring", damping: 10, duration: 2 }}>Tools</motion.span>
            {/* <div className='coding m-auto text-slate-600 dark:text-white flex   flex-col w-[280px] md:w-[550px] bg-gray-50 dark:bg-zinc-600 p-6 rounded-xl shadow-lg' > */}
            <h2 className='mb-6 w-[100px] text-center m-auto p-2  rounded-xl text-sky-500 bg-gray-100 shadow-md dark:bg-zinc-700 font-semibold text-xl'>Coding</h2>
            <div className='flex justify-evenly flex-wrap items-start font-normal coding m-auto text-slate-600 dark:text-white   w-[280px] md:w-[550px] bg-gray-50 dark:bg-zinc-600 p-6 rounded-xl shadow-lg'>
                <span className='flex flex-col items-center gap-[10px] w-[90px] p-3 hover:scale-[1.2] cursor-pointer transition-all duration-300 ease-in-out' >
                    <span className='icon-html5 text-[40px]'></span>
                    <span className=''>HTML 5</span>
                </span>
                <motion.span className='flex flex-col items-center gap-[10px] w-[90px] p-3 hover:scale-[1.2] cursor-pointer transition-all duration-300 ease-in-out'>
                    <span className='icon-javascript text-[40px]'></span>
                    <span className=''>Javascript</span>
                </motion.span >
                <motion.span className='flex flex-col items-center gap-[10px] w-[90px] p-3 hover:scale-[1.2] cursor-pointer transition-all duration-300 ease-in-out'>
                    <span className='icon-react text-[40px]'></span>
                    <span className=''>React JS</span>
                </motion.span   >
                <motion.span className='flex flex-col items-center gap-[10px] w-[90px] p-3 hover:scale-[1.2] cursor-pointer transition-all duration-300 ease-in-out'>
                    <SiTypescript className='text-[40px] text-blue-500' />
                    <span className=''>Typescript</span>
                </motion.span >
                <motion.span className='flex flex-col items-center gap-[10px] w-[90px] p-3 hover:scale-[1.2] cursor-pointer transition-all duration-300 ease-in-out'>

                    <span className=' text-black'>
                        <img src={icon} alt="s" className='w-[40px]' loading='lazy' />
                    </span>
                    <span className=''>Vite</span>
                </motion.span >
            </div>
            <h2 className='my-6 w-[100px] text-center m-auto p-2  rounded-xl text-sky-500 bg-gray-100 shadow-md dark:bg-zinc-700 font-semibold text-xl'>Styling</h2>
            <div className='flex justify-evenly flex-wrap items-start font-normal coding m-auto text-slate-600 dark:text-white   w-[280px] md:w-[550px] bg-gray-50 dark:bg-zinc-600 p-6 rounded-xl shadow-lg'>
                <motion.span className='flex flex-col items-center gap-[10px] w-[90px] p-3 hover:scale-[1.2] cursor-pointer transition-all duration-300 ease-in-out' >
                    <span className='icon-css3 text-[40px]'></span>
                    <span className=''>CSS 3</span>
                </motion.span >
                <motion.span className='flex flex-col items-center gap-[10px] w-[90px]  p-3 hover:scale-[1.2] cursor-pointer transition-all duration-300 ease-in-out'>
                    <FaBootstrap className='text-[40px] text-purple-700' />
                    <span className=''>Bootstrap</span>
                </motion.span >
                <motion.span className='flex flex-col items-center gap-[10px] w-[90px] p-3 hover:scale-[1.2] cursor-pointer transition-all duration-300 ease-in-out'>
                    <RiTailwindCssFill className='text-[40px] text-blue-600' />
                    <span className='text-center'>Tailwind CSS</span>
                </motion.span >
                <motion.span className='flex flex-col items-center gap-[10px] w-[90px] p-3 hover:scale-[1.2] cursor-pointer transition-all duration-300 ease-in-out'>
                    <span className=''>
                        <img src={logo} alt="s" className='w-[40px]' loading='lazy' />
                    </span>
                    <span className='text-center'>Flowbite</span>
                </motion.span >

            </div>
            <h2 className='my-6 w-[150px] text-center m-auto p-2  rounded-xl text-sky-500 bg-gray-100 shadow-md dark:bg-zinc-700 font-semibold text-xl'>Other Tools</h2>
            <div className='flex justify-evenly flex-wrap items-start font-normal coding m-auto text-slate-600 dark:text-white   w-[280px] md:w-[550px] bg-gray-50 dark:bg-zinc-600 p-6 rounded-xl shadow-lg'>
                <motion.span className='flex flex-col items-center gap-[10px] w-[90px] p-3 hover:scale-[1.2] cursor-pointer transition-all duration-300 ease-in-out' >
                    <span className='icon-git text-[40px]'></span>
                    <span className=''>Git</span>
                </motion.span >
                <motion.span className='flex flex-col items-center gap-[10px] w-[90px] p-3 hover:scale-[1.2] cursor-pointer transition-all duration-300 ease-in-out'>
                    <span className='icon-github1 text-[40px]'></span>
                    <span className=''>GitHub</span>
                </motion.span >
                <motion.span className='flex flex-col items-center gap-[10px] w-[90px] p-3 hover:scale-[1.2] cursor-pointer transition-all duration-300 ease-in-out'>
                    <span className='icon-visualstudiocode text-[40px]'></span>
                    <span className='text-center w-[120px]'>Visual Studio Code</span>
                </motion.span >

            </div>

            {/* </div> */}

        </section >
    )
}
