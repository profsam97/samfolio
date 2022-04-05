import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Hero from './Hero'
import Nav from './Layout/Nav'
import Portfolio from './Portfolio'
import Service from './Service';

const useStyles = makeStyles({
 
})
const Main = () => {
  const classes = useStyles()
  return (
        <>
           <Nav/>
         <Hero/> 
       <About/>
       <Service/>
      <Portfolio/>
       <Contact/>
       <Footer/>
       </>
  )
}

export default Main