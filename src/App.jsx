import { lazy, useState, Suspense } from "react"
import Navbar from "./components/Header/Navbar"

import About from './components/about/About'
import ContactUS from "./components/contactUS/ContactUS"
import Services from "./components/services/Services"
import ToUpArrow from "./components/toUpArrow/ToUpArrow"
import Tools from "./components/tools/Tools"
import Footer from "./components/footer/Footer"

// const About = lazy(() => import("./components/about/About"))
const Projects = lazy(() => import("./components/projects/Projects"))
// const ContactUS = lazy(() => import("./components/contactUS/ContactUS"))
// const Tools = lazy(() => import("./components/tools/Tools"))
// const Footer = lazy(() => import("./components/footer/Footer"))

function App() {

  const getMode = JSON.parse(window.localStorage.getItem("Mode"))

  const [isDarkMode, setIsDarkMode] = useState(getMode)




  return (
    <div className="body dark:bg-black bg-stone-50">
      <div className="container  px-4 sm:px-6 md:px-8 mx-auto  w-10/12 dark:bg-zinc-900 bg-white" >
        <Navbar isDark={isDarkMode} setIsDark={setIsDarkMode} />
        <Suspense fallback={<div>Loading...</div>}>
          <About />
          <Tools />
          <Services />
          <Projects />
          <ContactUS />
          <ToUpArrow />
          <Footer />
        </Suspense>
      </div>
    </div>
  )
}

export default App
