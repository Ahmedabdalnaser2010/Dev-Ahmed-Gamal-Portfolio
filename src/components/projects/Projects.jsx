import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'

function Projects() {

    const [project, setProject] = useState([])
    const [filter, setFilter] = useState([])
    const [activebutton, setActiveButton] = useState("")


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

            <motion.div initial={{ scale: 0, x: 1000 }} animate={{ scale: 1, x: 0 }} transition={{ type: "spring", duration: 1 }} whileHover={{ rotate: 1, scale: 1.02 }} key={proj.id} className=" max-w-sm  dark:border-gray-500 rounded-xl shadow-zinc-400 shadow-inner hover:border-[3px] border-l-zinc-400  bg-gray-200 dark:bg-zinc-600 text-slate-600 dark:text-white w-[300px] " >
                <a href={proj.homepage} className='shadow-md shadow-zinc-400 '>
                    <img className="rounded-t-xl h-[180px] w-[100%]" src={proj.image} alt={proj.title} loading='lazy' />
                </a>
                <div className="p-5 h-[170px] flex flex-col justify-between shadow-inner">
                    <a href={proj.homepage}>
                        <h3 className="mb-2 text-[1.25em] font-bold tracking-tight  text-sky-500  h-[2em]">{`${proj.name.replace(/-/g, " ")}`}</h3>
                    </a>
                    {/* <p className="mb-3 font-bold text-md  text-slate-600 dark:text-white">{proj.topics}</p> */}
                    <p className="mb-3 font-bold text-md  text-slate-600 dark:text-white">{proj.description}</p>
                    <div className='flex items-center justify-between'>
                        <div className="icons w-[50px] flex justify-between items-center gap-8">
                            <a href={proj.homepage} target='blank'><span className='icon-link text-[px]'></span></a>
                            <a href={proj.html_url} target='blank'><span className='icon-github text-[25px]'></span></a>
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

    // ///////////////////////////////////////////////////////////////////////////////////////


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


    const filterArray = [{ title: "All Projects", function: project }, { title: "HTML & CSS", function: filterCSS }, { title: "Javascript", function: filterJava }, { title: "React", function: filterReact }, { title: "Typescript", function: filterTypescript }]


    const filteredList = filterArray.map((items, index) => {
        return (<button arial-label="filter by name" onClick={(e) => { setActiveButton(e.target.innerText); setFilter(items.function) }} key={index} className=" relative flex items-center justify-center w-[130px] md:w-[180px] p-0.5 mb-2  overflow-hidden text-sm font-semibold  rounded-lg group bg-gradient-to-br dark:bg-zinc-600 bg-gray-100 dark:text-white  text-sky-500 hover:text-sky-500  hover:bg-gray-200 focus:bg-gray-200 focus:ring-2 dark:hover:bg-gray-500 " style={{ color: activebutton == items.title ? "#3593de" : "", backgroundColor: activebutton == items.title ? "#cfd0d3" : "" }}>
            <span className="w-[100%] active relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md ">
                {items.title}
            </span>
        </button>)

    })


    return (
        <section className='my-[4em]'>
            <motion.span id='projects' className='text-sky-500  mb-[3em] flex justify-center font-bold text-3xl p-2 w-[220px] m-auto shadow-md rounded-md shadow-gray-400 bg-gray-50 ' initial={{ scale: 0 }} viewport={{ once: true, amount: 1 }} whileInView={{ scale: 1 }} transition={{ type: "spring", damping: 10, duration: 2 }}>My Projects</motion.span>

            <div className=' pb-10 text-slate-50 flex justify-center md:justify-start md:items-start items-center md:flex-row flex-col gap-5'>

                <div className="filter  flex flex-row justify-between md:flex-col gap-5 min-w-[180px] flex-wrap w-[300px]">

                    {filteredList}

                </div>
                <div className='flex justify-center md:flex-row flex-wrap flex-col gap-8'>

                    {displayData}

                </div>



            </div>
        </section>
    )
}

export default Projects
