import { useEffect } from "react"
import { useState } from "react"


function Navbar({ isDark, setIsDark }) {

    const [displayMenu, setDisplayMenu] = useState(false)
    const [isMobile, setIsMobile] = useState(true)

    const handleSize = () => {

        window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false)
        setDisplayMenu(false)
    }

    const htmlClassDark = () => document.documentElement.classList.add('dark')
    const htmlClassLight = () => document.documentElement.classList.remove('dark')

    useEffect(() => {

        const getMode = JSON.parse(window.localStorage.getItem("Mode"))
        if (getMode !== null) {
            console.log(getMode)
            setIsDark(getMode)
        }

        window.addEventListener('resize', handleSize)

        handleSize()

        document.addEventListener("click", (e) => {
            if (!e.target.classList.contains("icon-menu")) {
                setDisplayMenu(false)
            }
        })



    }, [setIsDark])


    useEffect(() => {

        window.localStorage.setItem("Mode", JSON.stringify(isDark))

        isDark ? htmlClassDark() : htmlClassLight()

    }, [isDark])





    // window.localStorage(module,)

    return (
        <nav className="flex sticky top-0 justify-between items-center py-3 gap-4 z-20">
            <div style={{ display: isMobile ? "none" : 'flex' }} />
            <ul style={{ display: isMobile ? "none" : 'flex', width: "450px" }} className="opacity-90 justify-between gap-3 px-6 py-3 bg-stone-50 dark:bg-zinc-800 text-slate-600 dark:text-white rounded-full shadow-md dark:shadow-md" >
                <li className="hover:text-sky-600"><a href="#about">About</a></li>
                <li className="hover:text-sky-600"><a href="#tools">Tools</a></li>
                <li className="hover:text-sky-600"><a href="#services">Services</a></li>
                <li className="hover:text-sky-600"><a href="#projects">Projects</a></li>
                <li className="hover:text-sky-600"><a href="#contact">Contact</a></li>
                {/* <li className="hover:text-sky-600"><a href="#source">Sources</a></li> */}
            </ul>
            <button onClick={() => setDisplayMenu(true)} style={{ display: isMobile ? "block" : "none" }} className="icon-menu dark:shadow-md  text-left text-xl hover:animate-pulsebg-stone-50 dark:bg-zinc-900 text-slate-600 dark:text-white">   </button>
            {displayMenu && <div style={{ width: "90%", left: '50%', transform: "translatex(-50%)", opacity: "0.95" }} className="flex flex-col justify-between absolute top-[80px] gap-3 px-6 py-4 bg-stone-50 dark:bg-zinc-800 text-slate-600 dark:text-white rounded-xl text-sm transition duration-300 shadow-md dark:shadow-md" >
                <button className="icon-close self-end text-xl hover:animate-pulse" ></button>
                <ul>
                    <li style={{ borderColor: "rgb(59 59 59 / 45%)" }} className="selection py-2 border-b-2  hover:text-sky-600"><a className="selection" href="#about">About</a></li>
                    <li style={{ borderColor: "rgb(59 59 59 / 45%)" }} className="selection py-2 border-b-2  hover:text-sky-600"><a className="selection" href="#tools">Tools</a></li>
                    <li style={{ borderColor: "rgb(59 59 59 / 45%)" }} className="selection py-2 border-b-2  hover:text-sky-600"><a className="selection" href="#services">Services</a></li>
                    <li style={{ borderColor: "rgb(59 59 59 / 45%)" }} className="selection py-2 border-b-2  hover:text-sky-600"><a className="selection" href="#projects">Projects</a></li>
                    {/* <li style={{ borderColor: "rgb(59 59 59 / 45%)" }} className="selection py-2 border-b-2  hover:text-sky-600"><a className="selection" href="#contact">Contact</a></li> */}
                    <li className="selection py-2  hover:text-sky-600"><a className="selection" href="#contact">Contact</a></li>
                    {/* <li className="selection py-2 hover:text-cyan-500 "><a href="#source">Sources</a></li> */}
                </ul>

            </div>}

            <div style={{ width: "40px", height: "40px", border: "1px solid", borderRadius: "50%" }} className="bg-stone-50 dark:bg-zinc-800 text-slate-600 dark:text-white shadow-md">
                <button style={{ position: "relative", left: "50%", top: "50%", transform: "translate(-50%,-50%)" }} className={`icon-${isDark ? 'brightness-up' : 'moon-o'}  bg-stone-50 dark:bg-zinc-900 text-slate-600 dark:text-white w-5 text-xl hover:animate-pulse text-center shadow- dark:shadow-md`}
                    onClick={() => {
                        return (
                            isDark ? setIsDark(false) : setIsDark(true)
                            // isDark ? htmlClassDark() : htmlClassLight()

                        )
                    }}></button>
            </div>
        </nav >

    )
}

export default Navbar



