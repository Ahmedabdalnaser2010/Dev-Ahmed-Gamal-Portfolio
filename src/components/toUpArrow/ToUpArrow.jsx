import React, { useEffect, useState } from 'react'

function ToUpArrow() {

    const [displayArrow, setDisplayArrow] = useState(false)

    useEffect(() => {

        document.addEventListener("scroll", () => {
            setDisplayArrow(window.scrollY >= 600)
        })

        const arrowElement = document.querySelector(".arrow")
        arrowElement ? arrowElement.addEventListener("click", () => { window.scrollTo({ left: 0, top: 0, behavior: 'smooth' }) }) : null

        return () => {
            document.removeEventListener("scroll", () => {
                setDisplayArrow(window.scrollY >= 600)
            })
            arrowElement ? arrowElement.removeEventListener("click", () => { window.scrollTo({ left: 0, top: 0, behavior: 'smooth' }) }) : null

        }

    }, [])

    return (
        <div className='flex'>
            <span className='arrow icon-arrow-circle-up text-gray-500 dark:text-gray-100 text-[40px] fixed right-[1em] bottom-[25px] cursor-pointer' style={{ display: displayArrow ? 'flex' : 'none' }}></span>
        </div>
    )
}

export default ToUpArrow
