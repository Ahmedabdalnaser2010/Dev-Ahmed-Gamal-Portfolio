import React from 'react'
import avatar from '../../../public/Circle image.webp'
import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import webdevelop from '../../../public/animation/web development 4.json'

function About() {
    return (
        <section id="about" className='min-h-[80vh] '>
            <div className=' text-slate-600 dark:text-white mt-20 '>

                <div className='mb-10'>
                    <motion.img initial={{ transform: 'scale(0)' }} whileInView={{ transform: 'scale(1)' }} transition={{ type: "spring", damping: 8 }} className='w-[180px] mb-6' src={avatar} alt='Avatar'></motion.img>
                    <button className='icon-verified relative left-[180px] bottom-10 text-blue-500'></button>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='w-[280px] sm:w-[450px] md:w-[600px]'>
                        <h1 className='text-4xl text-black dark:text-white pb-6 font-bold'>I'm Ahmed Gamal</h1>
                        <h3 className='text-3xl text-black dark:text-white pb-6 font-semibold'>Frontend Developer</h3>
                        <p className=' text-slate-600 dark:text-gray-200 text-[18px]'>
                            I am a frontend developer with a solid foundation in modern web technologies and an experience in a creating responsive web projects using <b> HTML5, CSS3, JavaScript, and React.js</b>. I’m a quick learner who enjoys researching data to enhance my work. I’m eager to help clients build engaging websites, including <b>landing pages and e-commerce sites</b>.
                        </p>
                    </div>
                    <div className='w-[40%] hidden lg:flex justify-center'>
                        <Lottie animationData={webdevelop} className='scale-[1.2] '></Lottie>
                    </div>
                </div>
                <div className='flex justify-start items-center gap-[15px] mt-[1.5em] dark:text-gray-200'>
                    <motion.a initial={{ transform: 'scale(1)' }} whileHover={{ transform: 'scale(1.2)' }} transition={{ type: "spring", damping: 3 }} title='Visit my Repositories' target='blank' href="https://github.com/Ahmedabdalnaser2010"><span className='icon-github text-[25px] hover:text-black'></span> </motion.a>
                    <motion.a initial={{ transform: 'scale(1)' }} whileHover={{ transform: 'scale(1.2)' }} transition={{ type: "spring", damping: 3 }} title='Visit my Profile' target='blank' href="https://www.linkedin.com/in/ahmed-gamal-395651330/"><span className='icon-linkedin text-[25px] hover:text-blue-600'></span> </motion.a>
                    <motion.a initial={{ transform: 'scale(1)' }} whileHover={{ transform: 'scale(1.2)' }} transition={{ type: "spring", damping: 3 }} title='Visit my Profile' target='blank' href="https://discord.com/channels/@me"><span className='icon-discord text-[25px] hover:text-blue-600'></span> </motion.a>
                    <motion.a initial={{ transform: 'scale(1)' }} whileHover={{ transform: 'scale(1.2)' }} transition={{ type: "spring", damping: 3 }} target='blank' title='Mail me' href="mailto:ahmedabdalnaser2024@gmail.com"><span className='icon-google-plus2 text-[25px] hover:text-red-500'></span> </motion.a>
                    <motion.a initial={{ transform: 'scale(1)' }} whileHover={{ transform: 'scale(1.2)' }} transition={{ type: "spring", damping: 3 }} title='Contact me' target='blank' href="https://wa.me/01004676670?text=Hello%20there!" ><span className='icon-whatsapp text-[25px] hover:text-green-500'></span> </motion.a>


                </div>
            </div>

        </section >
    )
}

export default About
