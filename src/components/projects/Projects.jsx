import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'

function Projects() {

    const [project, setProject] = useState([])
    const [filter, setFilter] = useState([])
    // const [activebutton, setActiveButton] = useState("All Projects")



    const projectsData = async () => {

        const fetchData = await axios("./data.json")

        const getData = fetchData.data

        setProject(getData)

        setFilter(getData)
    }



    useEffect(() => {

        projectsData()

        return () => setFilter([])

    }, [])




    const displayData = filter.map((proj) => {

        return (

            <motion.div initial={{ scale: 0, x: 1000 }} animate={{ scale: 1, x: 0 }} transition={{ type: "spring", duration: 1 }} whileHover={{ rotate: 1, scale: 1.02 }} key={proj.id} className=" max-w-sm  dark:border-gray-500 rounded-xl shadow-zinc-400 shadow-inner hover:border-[3px] border-l-zinc-400  bg-stone-50 dark:bg-zinc-800 text-slate-600 dark:text-white w-[300px] " >
                <a href={proj.homepage} className='shadow-md shadow-zinc-400 '>
                    <img className="rounded-t-xl h-[180px] w-[100%]" src={proj.image} alt="" />
                </a>
                <div className="p-5 h-[170px] flex flex-col justify-between ">
                    <a href={proj.homepage}>
                        <h5 className="mb-2 text-[1.25em] font-bold tracking-tight  text-slate-600 dark:text-white h-[3em]">{`${proj.name.replace(/-/g, " ")}`}</h5>
                    </a>
                    <p className="mb-3 font-bold text-md  text-slate-600 dark:text-white">{proj.description}</p>
                    <div className='flex items-center justify-between'>
                        <div className="icons w-[50px] flex justify-between items-center">
                            <a href={proj.homepage} target='blank'><span className='icon-link text-[20px]'></span></a>
                            <a href={proj.html_url} target='blank'><span className='icon-github text-[20px]'></span></a>
                        </div>
                        {/* <a href={proj.homepage} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center  text-slate-600 dark:text-white rounded-lg hover:text-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            More
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a> */}
                    </div>

                </div>
            </motion.div >

        )

    })


    // filter




    let filterJava =

        project.filter(ele => {

            if (ele.topics.includes("javascript")) {

                return ele

            }
        })



    let filterCSS =

        project.filter(ele => {

            if (!ele.topics.includes("javascript") && !ele.topics.includes("reactjs")) {

                return ele

            }
        })


    let filterReact =

        project.filter(ele => {

            if (ele.topics.includes("reactjs")) {

                return ele

            }
        })
    let filterTypescript =

        project.filter(ele => {

            if (ele.topics.includes("typescript")) {

                return ele

            }
        })




    // const activeClass = () => {
    //     document.addEventListener("click", () => {
    //         buttons.forEach(ele => {
    //             ele.classList.contains("active") ? ele.classList.remove("active") : null
    //             ele.target.classList.add("active")
    //         })
    //     })
    // }

    // activeClass()


    return (
        <section className='my-[4em]'>
            <motion.span id='tools' className='text-sky-500  mb-[3em] flex justify-center font-bold text-3xl p-2 w-[220px] m-auto shadow-md rounded-md shadow-gray-400 bg-gray-100 ' initial={{ scale: 0 }} viewport={{ once: true, amount: 1 }} whileInView={{ scale: 1 }} transition={{ type: "spring", damping: 10, duration: 2 }}>My Projects</motion.span>

            <div className=' pb-10 text-slate-50 flex justify-center md:justify-start md:items-start items-center md:flex-row flex-col gap-5'>



                <div className="filter  flex flex-row justify-between md:flex-col gap-5 min-w-[180px] flex-wrap w-[300px]">

                    <button onClick={() => { setFilter(project) }} className=" relative inline-flex items-center justify-center w-[130px] md:w-[180px] p-0.5 mb-2  overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-br dark:bg-zinc-800 bg-zinc-400 focus:dark:bg-zinc-400  text-white hover:text-white hover:dark:text-white hover:bg-slate-900 focus:bg-slate-900 focus:ring-2 ">
                        <span className="w-[100%] active relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md ">
                            All Projects
                        </span>
                    </button>
                    <button onClick={() => {

                        setFilter(filterCSS)
                    }} className="relative inline-flex items-center justify-center w-[130px] md:w-[180px] p-0.5 mb-2  overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-br dark:bg-zinc-800 bg-zinc-400 focus:dark:bg-zinc-400  text-white hover:text-white hover:dark:text-white hover:bg-slate-900 focus:bg-slate-900 focus:ring-2 ">
                        <span className="w-[100%] relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md ">
                            HTML & CSS
                        </span>
                    </button>
                    <button onClick={() => { setFilter(filterJava) }} className="relative inline-flex items-center justify-center w-[130px] md:w-[180px] p-0.5 mb-2  overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-br dark:bg-zinc-800 bg-zinc-400 focus:dark:bg-zinc-400  text-white hover:text-white hover:dark:text-white hover:bg-slate-900 focus:bg-slate-900 focus:ring-2 ">
                        <span className="w-[100%] relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md ">
                            Javascript
                        </span>
                    </button>
                    <button onClick={() => { setFilter(filterReact) }} className="relative inline-flex items-center justify-center w-[130px] md:w-[180px] p-0.5 mb-2  overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-br dark:bg-zinc-800 bg-zinc-400 focus:dark:bg-zinc-400  text-white hover:text-white hover:dark:text-white hover:bg-slate-900 focus:bg-slate-900 focus:ring-2 ">
                        <span className="w-[100%] relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md ">
                            React JS
                        </span>
                    </button>
                    <button onClick={() => { setFilter(filterTypescript) }} className="relative inline-flex items-center justify-center w-[130px] md:w-[180px] p-0.5 mb-2  overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-br dark:bg-zinc-800 bg-zinc-400 focus:dark:bg-zinc-400  text-white hover:text-white hover:dark:text-white hover:bg-slate-900 focus:bg-slate-900 focus:ring-2 ">
                        <span className="w-[100%] relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md ">
                            Typescript
                        </span>
                    </button>


                </div>
                <div className='flex justify-center md:flex-row flex-wrap flex-col gap-8'>

                    {displayData}

                </div>



            </div>
        </section>
    )
}

export default Projects
