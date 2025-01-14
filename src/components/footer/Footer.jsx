import React from 'react'

export default function Footer() {
    return (


        <footer className="bg-gray-100 rounded-lg shadow dark:bg-zinc-800 mx-4 mt-4 ">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    {/* <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </a> */}
                    <ul className="flex flex-wrap justify-between items-start m-auto md:mx-[0]  w-[200px] md:w-[180px] mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">


                        <a title='Visit my Repositories' target='blank' href="https://github.com/Ahmedabdalnaser2010"><span className='icon-github text-[25px] hover:text-black'></span> </a>
                        <a title='Visit my Profile' target='blank' href="https://www.linkedin.com/in/ahmed-gamal-395651330/"><span className='icon-linkedin text-[25px] hover:text-blue-600'></span> </a>
                        <a title='Visit my Profile' target='blank' href="https://discord.com/channels/@me"><span className='icon-discord text-[25px] hover:text-blue-600'></span> </a>
                        <a target='blank' title='Mail me' href="mailto:ahmedabdalnaser2024@gmail.com"><span className='icon-google-plus2 text-[25px] hover:text-red-500'></span> </a>
                        <a title='Contact me' target='blank' href="https://wa.me/01004676670?text=Hello%20there!" ><span className='icon-whatsapp text-[25px] hover:text-green-500'></span> </a>


                    </ul>


                    <ul className="flex flex-wrap m-auto md:mx-[0]  items-center justify-between gap-2 mb-6 text-sm font-medium w-[200px] md:w-[240px] text-gray-500 sm:mb-0 dark:text-gray-400 mt-5 md:mt-0">
                        <li className='w-[50px]'>
                            <a href="#about" className="hover:underline me-4 md:me-6 w-[100%] ">About</a>
                        </li>
                        <li className='w-[50px]'>
                            <a href="#services" className="hover:underline me-4 md:me-6 w-[100%]">Services</a>
                        </li>
                        <li className='w-[50px]'>
                            <a href="#projects" className="hover:underline me-4 md:me-6 w-[100%]">Projects</a>
                        </li>
                        <li className='w-[50px]'>
                            <a href="#contact" className="hover:underline me-4 md:me-6 w-[100%]">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-300 sm:mx-auto dark:border-black lg:my-8 shadow-xl" />
                <span className="block text-sm text-gray-500 text-center dark:text-gray-400">© 2025 <a href="https://www.linkedin.com/in/ahmed-gamal-395651330/" className="hover:underline">Dev.Ahmed Gamal</a>. All Rights Reserved.</span>
            </div>
        </footer >


    )
}



// <footer className="bg-gray-200 rounded-lg shadow m-4 dark:bg-zinc-800">
// <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
//     <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://flowbite.com/" className="hover:underline">Ahmed Gamal</a>. All Rights Reserved.
//     </span>
//     <ul className="flex flex-wrap justify-between items-center md:w-[120px] mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
//         {/* <li>
//             <a href="#about" className="hover:underline me-4 md:me-6">About</a>
//         </li>
//         <li>
//             <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
//         </li>
//         <li>
//             <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
//         </li>
//         <li>
//             <a href="#contact" className="hover:underline">Contact</a>
//         </li> */}

//         <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
//         <a title='Visit my Repositories' target='blank' href="https://github.com/Ahmedabdalnaser2010"><span className='icon-github text-[25px] hover:text-black'></span> </a>
//         <a title='Visit my Profile' target='blank' href="https://www.linkedin.com/in/ahmed-gamal-395651330/"><span className='icon-linkedin text-[25px] hover:text-blue-600'></span> </a>
//         <a target='blank' title='ahmedabdalnaser2024@gmail.com' href=""><span className='icon-google-plus2 text-[25px] hover:text-red-500'></span> </a>

//     </ul>
// </div>
// </footer>
