import { Paper } from '@mui/material'
import React from 'react'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Hero from './Hero'
import Nav from './Layout/Nav'
import Portfolio from './Portfolio'
import Service from './Service';

const Main = () => {
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