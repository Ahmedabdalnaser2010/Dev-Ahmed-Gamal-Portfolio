import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion'
import Lottie from 'lottie-react';
import sendEmail from '../../../public/animation/send me email.json'
import done from '../../../public/animation/done 2.json'

function ContactUS() {

    const [state, handleSubmit] = useForm("mannqlgy");
    if (state.succeeded) {
        return <p className='flex  items-center justify-center gap-7'>Your Email has been sent successfully!<Lottie loop={false} animationData={done} className='scale-[1.2]'></Lottie> </p>;
    }

    return (
        <section className='mt-[4em] min-h-[100vh] pt-10'>
            <motion.span id='contact' className='text-sky-500  mb-[3em] flex justify-center font-bold text-3xl p-2 w-[220px] m-auto shadow-md rounded-md shadow-gray-400 bg-gray-100 ' initial={{ scale: 0 }} viewport={{ once: true, amount: 1 }} whileInView={{ scale: 1 }} transition={{ type: "spring", damping: 10, duration: 2 }}>Contact Us</motion.span>
            <div className='pb-10 mt-10   text-slate-600 dark:text-white '>
                <div className="title py-5 flex items-center">
                    <span className='icon-envelope1 text-[30px] mr-4'></span>
                    {/* <span className='text-[30px] font-bold'>Contact Us</span> */}
                    <p>Contact us for more information and get notified when i publish something new.</p>
                </div>

                {/* <p>Contact us for more information and get notified when i publish something new.</p> */}
                <div className='flex justify-between items-center h-[450px]'>
                    <form action='https://formspree.io/f/mannqlgy' method='post' onSubmit={handleSubmit} className='flex flex-col justify-center items-start gap-5 mt-7'>
                        <div className='flex flex-col md:flex-row items-start md:items-center gap-3'>
                            <label htmlFor="name" className='w-[150px]'>Name:</label>
                            <input id='name' name='name' required type="text" className=' rounded-lg  w-[280px] lg:w-[340px] dark:bg-zinc-800 shadow shadow-zinc-400 border-none' />
                            <ValidationError
                                prefix="Name"
                                field="name"
                                errors={state.errors}
                            />
                        </div>
                        <div className='flex flex-col md:flex-row items-start md:items-center gap-3'>
                            <label htmlFor="email" className='w-[150px]'>Email-Address:</label>
                            <input id='email' name='email' required type="email" className=' rounded-lg  w-[280px] lg:w-[340px] dark:bg-zinc-800 shadow shadow-zinc-400 border-none' />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                        </div>
                        <div className='flex flex-col md:flex-row items-start md:items-start gap-3'>
                            <label htmlFor="message" className='w-[150px]'>Your Message:</label>
                            <textarea name="message" id='message' required className='  w-[280px] h-[150px]  lg:w-[340px]  rounded-lg  dark:bg-zinc-800 shadow shadow-zinc-400 border-none' />

                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                        </div>
                        <button disabled={state.submitting} className='self-end px-3 py-2 text-base w-[110px] p-0.5 mb-2  overflow-hidden  font-semibold  rounded-lg group bg-gradient-to-br dark:bg-zinc-600 bg-gray-100 dark:text-white  text-sky-500 hover:text-sky-500  hover:bg-gray-200 focus:bg-gray-200 focus:ring-2 dark:hover:bg-gray-500 '>Submit</button>
                    </form>
                    <div className='hidden lg:flex'>
                        <Lottie animationData={sendEmail} loop={1} className='scale-[0.7]'></Lottie>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default ContactUS
