import { createTheme, Paper } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useContext } from 'react'
import About from './About'
import Contact from './Contact'
import ContextApi from './Context/ContextAPI'
import Footer from './Footer'
import Hero from './Hero'
import Nav from './Layout/Nav'
import Portfolio from './Portfolio'
import Service from './Service';

const useStyles = makeStyles({
    root : {

    }
})

const Main = () => {
   const darkMode = useContext(ContextApi).darkMode;
  return (
        <Paper elevation={0}>
           <Nav/>
         <Hero/> 
       <About/>
       <Service/>
      <Portfolio/>
       <Contact/>
       <Footer/>
       </Paper>
  )
}

export default Main