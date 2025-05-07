import React from 'react'
import { motion } from "framer-motion"

export default function Services() {
    return (
        <section className='my-[4em] min-h-[80vh]'>
            <motion.span id='tools' className='text-sky-500  mb-[3em] flex justify-center font-bold text-3xl p-2 w-[220px] m-auto shadow-md rounded-md shadow-gray-400 bg-gray-100 ' initial={{ scale: 0 }} viewport={{ once: true, amount: 1 }} whileInView={{ scale: 1 }} transition={{ type: "spring", damping: 10, duration: 2 }}>Services</motion.span>
            <div className='flex justify-center items-center flex-col md:flex-row gap-4'>

                <motion.a href="#" className="w-[280px]  md:w-[300px] h-[350px] md:h-[310px]  block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-zinc-800 dark:border-gray-700 dark:hover:bg-gray-700" initial={{ x: -100, scale: 0 }} viewport={{ once: true, amount: 1 }} whileInView={{ x: 0, scale: 1 }} transition={{ type: "spring", damping: 10, duration: 1 }}>

                    <h5 className="h-[100px] md:h-[60px] pb-2 mb-2 text-[1.3em] text-center  font-bold tracking-tight text-gray-900 dark:text-white">Web Development</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Build dynamic and interactive web applications using modern JavaScript frameworks such as React. Implement state management, component-based architecture, and responsive design to create high-quality user experiences.</p>
                </motion.a>
                <motion.a href="#" className=" w-[280px] md:w-[300px] h-[350px] md:h-[310px] block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-zinc-800 dark:border-gray-700 dark:hover:bg-gray-700" layout initial={{ x: 100, scale: 0 }} viewport={{ once: true, amount: 1 }} whileInView={{ x: 0, scale: 1 }} transition={{ type: "spring", damping: 10, duration: 1 }}>

                    <h5 className="h-[100px] md:h-[60px] pb-2 mb-2 text-[1.3em] text-center font-bold tracking-tight text-gray-900 dark:text-white">Website Maintenance and Updates</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400"> Provide ongoing support for existing websites, including content updates, bug fixes, and minor enhancements. Ensure that sites remain functional and up to date with the latest web standards.</p>
                </motion.a>


            </div>
        </section>
    )
}
