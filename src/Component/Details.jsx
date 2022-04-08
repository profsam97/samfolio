import { Grid } from '@mui/material'
import React from 'react'
import DetailsSub from './DetailsSub'
import Footer from './Footer'
import Nav2 from './Layout/Nav2'
import PortfolioDetails from './PortfolioDetails'

const Details = () => {
  return (
      <>
    <Grid container direction='column' className='hero1 bg-image3'>
    <div className="overlay-mf1"></div>
      <Grid item xs={2}>
          <Nav2/>
      </Grid>
       <Grid item xs={10}>
          <DetailsSub/>
       </Grid>
    </Grid>
    <PortfolioDetails/>
    <Footer/>
    </>
  )
}

export default Details