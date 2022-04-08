import React, { useRef, useState } from 'react'
import ContextApi from './ContextAPI'
const ContextProvider = (props) => {
    const About = useRef(null)
    const Contact = useRef(null);
    const Service = useRef(null);
    const Work = useRef(null);
      const [darkMode, setDarkMode] = useState(false);
      const toggleMode = () => {
        setDarkMode(curMode => !curMode);
      }
    const ScrollToSection = (page) => {
    switch(page) {
      case 'About': 
      About.current.scrollIntoView({behavior : 'smooth'})
      break;
      case 'Contact':
      Contact.current.scrollIntoView({behavior : 'smooth'})
      break;
      case 'Work':
      Work.current.scrollIntoView({behavior : 'smooth'})
      break;
      case 'Services':
      Service.current.scrollIntoView({behavior : 'smooth'})
      break;
      default: 
    window.scroll({top: 0, behavior: 'smooth'})
    }
}
    const context = {
        About,
        Service,
        Work,
        Contact,
        darkMode,
        toggleMode,
        ScrollToSection
    } 
  return (
    <ContextApi.Provider value={context}>
    {props.children}
     </ContextApi.Provider>
  )
}

export default ContextProvider