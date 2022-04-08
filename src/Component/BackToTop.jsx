import React, { useCallback, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const BackToTopOverlay = () => {
  const scrollTop = () => {
    window.scroll({top: 0, behavior: 'smooth'})
  }
  const [isActive, setIsActive] = useState(false);
  const toggleBacktotop = useCallback(() => {
    if (window.scrollY > 100) {
        setIsActive(true);
      } else {
        setIsActive(false)
      }
  }, [])
  useEffect(() => {
    window.addEventListener('scroll', toggleBacktotop);
     return () =>{
      window.removeEventListener('scroll', toggleBacktotop);
     }
      }, [toggleBacktotop]
  )
  const classes = isActive ? 'back-to-top active' : 'back-to-top';
  return (
    <>
    <div className={classes} onClick={scrollTop}>
      <FontAwesomeIcon icon={faArrowUp} className='i'/>
    </div>
    {}
    </>
  )
} 
const BackToTop = () => {
     const portalElements = document.getElementById('backToTop');
     return (
       <>
        {ReactDOM.createPortal(<BackToTopOverlay/>, portalElements)}
        </>
     )
}

export default BackToTop