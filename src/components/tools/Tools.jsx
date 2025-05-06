import React from 'react'
import { motion } from 'framer-motion'
import icon from '../../../public/icons/Vite.js.png'
import logo from '../../../public/icons/logo.svg'
import boot from '../../../public/icons/bootstrap-logo-shadow.png'


export default function Tools() {
    return (
        <section className='my-[4em] min-h-[80vh]'>
            <motion.span id='tools' className='text-slate-600 dark:text-white mb-[3em] flex justify-center font-bold text-3xl p-2 w-[220px] m-auto shadow-md rounded-md shadow-gray-400 bg-gray-300 ' initial={{ scale: 0 }} animate={{}} whileInView={{ scale: 1 }} transition={{ type: "spring", damping: 10, duration: 2 }}>Tools</motion.span>
            <div className='coding m-auto text-slate-600 dark:text-white flex   flex-col w-[280px] md:w-[550px] bg-gray-100 dark:bg-zinc-800 p-6 rounded-xl' >
                <h2 className='mb-6 w-[100px] text-center m-auto p-2  rounded-xl bg-gray-200 dark:bg-zinc-700 font-semibold'>Coding</h2>
                <div className='flex justify-evenly flex-wrap items-start'>
                    <motion.span initial={{ scale: 1 }} whileHover={{ scale: 1.2 }} transition={{ type: "spring", damping: 5, duration: 1 }} className='flex flex-col items-center gap-[10px] w-[90px] p-3' >
                        <span className='icon-html5 text-[40px]'></span>
                        <span className=''>HTML 5</span>
                    </motion.span>
                    <motion.span initial={{ scale: 1 }} whileHover={{ scale: 1.2 }} transition={{ type: "spring", damping: 5, duration: 1 }} className='flex flex-col items-center gap-[10px] w-[90px] p-3'>
                        <span className='icon-javascript text-[40px]'></span>
                        <span className=''>Javascript</span>
                    </motion.span >
                    <motion.span initial={{ scale: 1 }} whileHover={{ scale: 1.2 }} transition={{ type: "spring", damping: 5, duration: 1 }} className='flex flex-col items-center gap-[10px] w-[90px] p-3'>
                        <span className='icon-react text-[40px]'></span>
                        <span className=''>React JS</span>
                    </motion.span   >
                    <motion.span initial={{ scale: 1 }} whileHover={{ scale: 1.2 }} transition={{ type: "spring", damping: 5, duration: 1 }} className='flex flex-col items-center gap-[10px] w-[90px] p-3'>
                        <span className='icon-next-dot-js text-[40px] text-black'></span>
                        <span className=''>Next JS</span>
                    </motion.span >
                    <motion.span initial={{ scale: 1 }} whileHover={{ scale: 1.2 }} transition={{ type: "spring", damping: 5, duration: 1 }} className='flex flex-col items-center gap-[10px] w-[90px] p-3'>

                        <span className=' text-black'>
                            <img src={icon} alt="s" className='w-[40px]' />
                        </span>
                        <span className=''>Vite</span>
                    </motion.span >
                </div>
                <h2 className='my-6 w-[100px] text-center m-auto p-2  rounded-xl bg-gray-200 dark:bg-zinc-700 font-semibold'>Styling</h2>
                <div className='flex justify-evenly flex-wrap items-start'>
                    <motion.span initial={{ scale: 1 }} whileHover={{ scale: 1.2 }} transition={{ type: "spring", damping: 5, duration: 1 }} className='flex flex-col items-center gap-[10px] w-[90px] p-3' >
                        <span className='icon-css3 text-[40px]'></span>
                        <span className=''>CSS 3</span>
                    </motion.span >
                    <motion.span initial={{ scale: 1 }} whileHover={{ scale: 1.2 }} transition={{ type: "spring", damping: 5, duration: 1 }} className='flex flex-col items-center gap-[10px] w-[90px]  p-3'>
                        <span className=''>
                            <img src={boot} alt="" className='w-[40px]  h-[40px]' />
                        </span>
                        <span className=''>Bootstrap</span>
                    </motion.span >
                    <motion.span initial={{ scale: 1 }} whileHover={{ scale: 1.2 }} transition={{ type: "spring", damping: 5, duration: 1 }} className='flex flex-col items-center gap-[10px] w-[90px] p-3'>
                        <span className='icon-tailwindcss text-[40px]'></span>
                        <span className='text-center'>Tailwind CSS</span>
                    </motion.span >
                    <motion.span initial={{ scale: 1 }} whileHover={{ scale: 1.2 }} transition={{ type: "spring", damping: 5, duration: 1 }} className='flex flex-col items-center gap-[10px] w-[90px] p-3'>
                        <span className=''>
                            <img src={logo} alt="s" className='w-[40px]' />
                        </span>
                        <span className='text-center'>Flowbite</span>
                    </motion.span >

                </div>
                <h2 className='my-6 w-[150px] text-center m-auto p-2  rounded-xl bg-gray-200 dark:bg-zinc-700 font-semibold'>Other Tools</h2>
                <div className='flex justify-evenly flex-wrap items-start'>
                    <motion.span initial={{ scale: 1 }} whileHover={{ scale: 1.2 }} transition={{ type: "spring", damping: 5, duration: 1 }} className='flex flex-col items-center gap-[10px] w-[90px] p-3' >
                        <span className='icon-git text-[40px]'></span>
                        <span className=''>Git</span>
                    </motion.span >
                    <motion.span initial={{ scale: 1 }} whileHover={{ scale: 1.2 }} transition={{ type: "spring", damping: 5, duration: 1 }} className='flex flex-col items-center gap-[10px] w-[90px] p-3'>
                        <span className='icon-github1 text-[40px]'></span>
                        <span className=''>GitHub</span>
                    </motion.span >
                    <motion.span initial={{ scale: 1 }} whileHover={{ scale: 1.2 }} transition={{ type: "spring", damping: 5, duration: 1 }} className='flex flex-col items-center gap-[10px] w-[120px] p-3'>
                        <span className='icon-visualstudiocode text-[40px]'></span>
                        <span className='text-center'>Visual Studio Code</span>
                    </motion.span >

                </div>

            </div>

        </section >
    )
}
