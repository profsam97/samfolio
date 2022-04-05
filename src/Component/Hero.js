import { Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import Typo from './Layout/Typo'


const useStyles = makeStyles((theme) => ({
   heroTitle: {
    fontSize: 50,

    [theme.breakpoints.down('sm')]: {
      fontSize: 30
    },
  },

}))
const Hero = () => {  
    const classes = useStyles()
  return (
    <Grid  container direction='column' spacing={12} className='hero bg-image'>
        <Grid item xs={3}/>

        <Grid item xs={5} sx={{textAlign: 'center'}}>
        <Typography className={classes.heroTitle} variant= 'h2' sx={{textAlign: 'center'}}>I am Oladejo 
            Samuel    </Typography>
        <Typo options={{textAlign: 'center', variant: 'h6'}}>I am a Software Engineer 
                </Typo>           
        </Grid>

         <Grid item xs={4}/>
    </Grid>
  )
}

export default Hero