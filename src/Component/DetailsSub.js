import { Breadcrumbs, Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const useStyle = makeStyles({
  link: {
    textDecoration: 'none',
    color: '#fff'
  }
})
const DetailsSub = () => {
  const classes = useStyle();
    const navigate = useNavigate();
  return (
    <Grid container direction='column' spacing={5}>
    <Grid item xs={5}/>
    <Grid item xs={4} className='hero-title'>
        <Typography  sx={{textAlign: 'center', color: 'white'}} variant='h2'>PROJECT DETAILS
     </Typography>
     </Grid>
     <Grid item xs={3} >
         <Grid item container>
             <Grid item xs={3} md={5}/>
             <Grid item xs={5} md={2} className='hero-title'>
    <Breadcrumbs  >
         <Link to='/' className={classes.link} onClick={() => navigate('/')}>Home </Link>
         <Typography  sx={{textAlign: 'center', color: '#c2d1df'}} variant='p'>Project details
     </Typography>
    </Breadcrumbs>
    </Grid>
    <Grid item xs={3} md={5}/>
    </Grid>
      </Grid>
    </Grid>
  )
}

export default DetailsSub