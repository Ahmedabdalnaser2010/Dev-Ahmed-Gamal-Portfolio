import { useState, Suspense } from "react"
import Navbar from "./components/Header/Navbar"
import About from './components/about/About'
import ContactUS from "./components/contactUS/ContactUS"
import Services from "./components/services/Services"
import ToUpArrow from "./components/toUpArrow/ToUpArrow"
import Tools from "./components/tools/Tools"
import Footer from "./components/footer/Footer"
import Projects from "./components/projects/Projects"

function App() {

  const getMode = JSON.parse(window.localStorage.getItem("Mode"))

  const [isDarkMode, setIsDarkMode] = useState(getMode)




  return (
    <div className="body dark:bg-black bg-stone-50">
      <div className="container  px-4 sm:px-6 md:px-8 mx-auto  w-10/12 dark:bg-zinc-900 bg-white" >
        <Navbar isDark={isDarkMode} setIsDark={setIsDarkMode} />
        <Suspense fallback={<div className="m-[50%]">Loading...</div>}>
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
