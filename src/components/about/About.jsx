import React from 'react'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import { FaSquareXTwitter } from "react-icons/fa6";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import webdevelop from '../../../public/animation/web development 4.json'
import avatar from '../../../public/Circle image.webp'
import cv from '../../../public/icons/icons8-cv-100.png'



function About() {



    const nameRef = useRef(null);
    const titleRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(SplitText);

        // Store animations and splits for cleanup
        let animations = [];
        let splits = [];

        // Name animation (character by character)
        if (nameRef.current) {
            const nameSplit = new SplitText(nameRef.current, {
                type: "chars",
                charsClass: "char-animate"
            });
            splits.push(nameSplit);

            animations.push(
                gsap.from(nameSplit.chars, {
                    x: 100,
                    opacity: 0,
                    duration: 0.8,
                    ease: "back.out",
                    stagger: 0.05
                })
            );
        }

        // Title animation
        if (titleRef.current) {
            const titleSplit = new SplitText(titleRef.current, {
                type: "chars",
                charsClass: "char-animate"
            });
            splits.push(titleSplit);

            animations.push(
                gsap.from(titleSplit.chars, {
                    x: 100,
                    opacity: 0,
                    duration: 0.8,
                    ease: "back.out",
                    stagger: 0.05
                })
            );
        }

        // Text animation (line by line)
        if (textRef.current) {
            const textSplit = new SplitText(textRef.current, {
                type: "lines",
                linesClass: "line-animate"
            });
            splits.push(textSplit);

            animations.push(
                gsap.from(textSplit.lines, {
                    y: 30,
                    opacity: 0,
                    duration: 0.6,
                    stagger: 0.15,
                    delay: 0.8,
                    ease: "power1.out"
                })
            );
        }

        // Cleanup function
        return () => {
            animations.forEach(anim => anim.kill());
            splits.forEach(split => split.revert());
        };
    }, []);

    return (
        <section id="about" className='min-h-[80vh] '>
            <div className=' text-slate-600 dark:text-white mt-10 '>

                <div className='mb-2'>
                    <motion.img initial={{ transform: 'scale(0)' }} whileInView={{ transform: 'scale(1)' }} viewport={{ once: true, amount: 1 }} transition={{ type: "spring", damping: 8 }} className='w-[180px] mb-6' src={avatar} alt='Avatar'></motion.img>
                    <button className='icon-verified relative left-[180px] bottom-10 text-blue-500'></button>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='w-[300px] sm:w-[450px] md:w-[600px]'>
                        <h1 className='text-3xl text-sky-500  dark:text-white pb-6 font-bold flex gap-5'><span className='text-gray-700 dark:text-gray-200'>I'm</span> <span className='dark:text-sky-400' ref={nameRef}>Ahmed Gamal</span></h1>
                        <h3 ref={titleRef} className='text-[1.4rem] text-sky-600 dark:text-white pb-6 font-semibold'>Frontend Developer || React JS</h3>
                        <p ref={textRef} className=' text-slate-600 dark:text-white text-[18px] '>
                            I am a frontend developer with a solid foundation in modern web technologies and an experience in a creating responsive web projects using<span className='font-semibold text-sky-800 dark:text-sky-400'> HTML5, CSS3, Javascript,Typescript, and React.js</span>. I’m a quick learner who enjoys researching data to enhance my work. I’m eager to help clients build engaging websites, including <span className='font-semibold text-sky-800 dark:text-sky-400'>landing pages,web apps and e-commerce websites</span>.
                        </p>
                    </div>
                    <div className='w-[40%] hidden lg:flex justify-center'>
                        <Lottie animationData={webdevelop} className='scale-[1.2] '></Lottie>
                    </div>
                </div>
                <div className='flex flex-col mt-10 sm:flex-row items-center justify-evenly sm:justify-start gap-7'>

                    <div className='flex justify-start items-center gap-[15px] dark:text-gray-200'>
                        <a className='hover:scale-[1.2] transition-all duration-300 ease-in-out' title='Visit my Repositories' target='blank' href="https://github.com/Ahmedabdalnaser2010"><span className='icon-github  text-[35px] dark:text-gray-400 text-black'></span> </a>
                        <a className='hover:scale-[1.2] transition-all duration-300 ease-in-out' title='Visit my Profile' target='blank' href="https://www.linkedin.com/in/ahmed-gamal-395651330/"><span className='icon-linkedin  text-[35px] text-blue-600'></span> </a>
                        <a className='hover:scale-[1.2] transition-all duration-300 ease-in-out' title='Visit my Profile' target='blank' href="https://discord.com/channels/@me"><span className='icon-discord  text-[35px] text-purple-500'></span> </a>
                        <a className='hover:scale-[1.2] transition-all duration-300 ease-in-out' target='blank' title='Mail me' href="mailto:ahmedabdalnaser2024@gmail.com"><span className='icon-google-plus2  text-[35px] text-red-500'></span> </a>
                        <a className='hover:scale-[1.2] transition-all duration-300 ease-in-out' title='Contact me' target='blank' href="https://wa.me/01004676670?text=Hello%20there!" ><span className='icon-whatsapp  text-[35px] text-green-500'></span> </a>
                        <a className='hover:scale-[1.2] transition-all duration-300 ease-in-out' title='Follow Me' target='blank' href="https://x.com/AhmedGamal9224" ><FaSquareXTwitter className='text-[40px] text-black dark:text-gray-400' /> </a>

                    </div>

                    <a href="https://drive.google.com/file/d/1jDM3Nz_Rbx7rpthDGBpgJOlId5iNF5Hq/view?usp=sharing" target='blank'>

                        <button className='flex items-center justify-between px-3 py-2 text-base min-w-[180px] p-0.5   overflow-hidden  font-semibold  rounded-lg group bg-gradient-to-br dark:bg-zinc-600 bg-gray-100 dark:text-white  text-sky-500 hover:text-sky-500  hover:bg-gray-200 focus:bg-gray-200 focus:ring-2 dark:hover:bg-gray-500 '>
                            <img src={cv} alt="CV" className="w-[30px]" />
                            <span>Preview my CV</span> </button>
                    </a>
                </div>
            </div>

        </section >
    )
}

export default About

