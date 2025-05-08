import React from 'react'
import { motion } from "framer-motion"
import serv1 from "../../../public/icons/icons8-front-end-64 (3).png"
import serv2 from "../../../public/icons/work-steps-3.webp"

export default function Services() {
    return (
        <section className='my-[4em] min-h-[80vh]'>
            <motion.span id='services' className='text-sky-500  mb-[3em] flex justify-center font-bold text-3xl p-2 w-[220px] m-auto shadow-md rounded-md shadow-gray-400 bg-gray-50  ' initial={{ scale: 0 }} viewport={{ once: true, amount: 1 }} whileInView={{ scale: 1 }} transition={{ type: "spring", damping: 10, duration: 2 }}>Services</motion.span>
            <div className='flex justify-center items-center flex-col md:flex-row gap-10'>

                <motion.span className="w-[280px] h-[350px] max-w-sm p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 dark:bg-zinc-600 dark:border-gray-700 dark:hover:bg-gray-500 flex flex-col items-center justify-center gap-1" initial={{ x: -100, scale: 0 }} viewport={{ once: true, amount: 1 }} whileInView={{ x: 0, scale: 1 }} transition={{ type: "spring", damping: 10, duration: 1 }}>
                    <img src={serv1} alt="" className='w-[50px] mt-2 ' loading='lazy' />
                    <h2 className="h-[100px] md:h-[60px] pb-2 mb-2 text-[1.3em] text-center  font-bold tracking-tight text-sky-500 ">Web Development</h2>
                    <p className="font-normal text-slate-600 dark:text-white">
                        Build dynamic and interactive websites using modern JavaScript frameworks such as React. Implement state management, component-based architecture, and responsive design to create high-quality user experiences.
                    </p>
                </motion.span>
                <motion.span className="w-[280px] h-[350px] max-w-sm p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 dark:bg-zinc-600 dark:border-gray-700 dark:hover:bg-gray-700 flex flex-col items-center justify-center gap-1" initial={{ x: -100, scale: 0 }} viewport={{ once: true, amount: 1 }} whileInView={{ x: 0, scale: 1 }} transition={{ type: "spring", damping: 10, duration: 1 }}>
                    <img src={serv2} alt="" className='w-[50px] mt-2 ' loading='lazy' />
                    <h2 className="h-[100px] md:h-[60px] pb-2 mb-2 text-[1.3em] text-center font-bold tracking-tight text-sky-500">Website Maintenance </h2>
                    <p className="font-normal text-slate-600 dark:text-white min-h-[190px]"> Provide ongoing support for existing websites, including content updates, bug fixes, and minor enhancements. Ensure that sites remain functional and up to date with the latest web standards.</p>
                </motion.span>


            </div>
        </section>
    )
}
