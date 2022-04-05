import FacebookIcon from '@mui/icons-material/Facebook';
import { Container, Grid, Paper, Typography } from '@mui/material'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { makeStyles } from '@mui/styles'
import React, { useContext, useEffect } from 'react'
import MessageItems from './Message'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { Link } from 'react-router-dom';
import ContextApi from './Context/ContextAPI';
const useStyle =  makeStyles({
    container : {
        padding: 50
    }
})
const Contact = () => {
  const handleLink = path => {
      window.open(path, '_blank')
    }
    const classes = useStyle();
    const contact = useContext(ContextApi).Contact
  return (
    <Paper ref={contact} className='paralax-mf  bg-image2'  elevation={0}>
    <span className="overlay-mf"></span>
    <Container  className={classes.container}>
        <Grid container  spacing={3}  className='box-shadow-full'>
        <Grid item xs={12} sm={6} >
    
       <Typography mb={4} className='title-left' variant='h4'><b> Send Message</b></Typography>
        <MessageItems/>
         
        </Grid>
         <Grid item xs={12} sm={6}>
            <Typography className='title-left' variant='h4'><b> Get in Touch</b></Typography>
            <Grid item container direction='column' spacing={2} mt={2}>
              <Grid item xs={2}>
                <Typography variant='subtitle1'   color='textSecondary'>
                  Please feel free to get in touch with me. You can reach out to me via email or phone. Thank you.
                </Typography>
              </Grid>
               <Grid item xs={2} padding={2} >
                 <Grid item container direction='column' spacing={2}>
                  <Grid  item xs={4}>
            <Typography variant='body1' sx={{display: 'flex'}} color='textSecondary'>
               <LocationOnIcon style={{color : '#0078ff'}}/> &nbsp;  Lagos, Nigeria </Typography> 
                  </Grid>
                  <Grid  item xs={4}>
                <Typography sx={{display : 'flex'}}  variant='body1' color='textSecondary'> 
               <PhoneAndroidIcon style={{color : '#0078ff'}}  /> &nbsp; +2348180436525  </Typography> 
                </Grid>
                 <Grid  item xs={4}>
                 <Typography variant='body1' sx={{display : 'flex'}}  color='textSecondary'>
                 <MailOutlineIcon  style={{color : '#0078ff'}}  /> &nbsp; proftoby97@gmail.com </Typography> 
                </Grid>
                 </Grid>

              </Grid>
              <Grid item xs={2}>
                <Grid item container  spacing={0}>
                  <Grid item xs={4} sx={{display: 'flex'}}>
                    <span className='ico-circle' onClick={() =>handleLink('https://web.facebook.com/profsam97/')} >
                        <FacebookIcon className='i'/>
                     </span>
                     <span className='ico-circle' onClick={() =>handleLink('https://github.com/profsam97')}>
                 
                        <GitHubIcon className='i'/>
                     </span>
                     <span className='ico-circle' onClick={() =>handleLink('https://www.linkedin.com/in/proftoby/')}>
                        <LinkedInIcon className='i'/>
                     </span>
                     
                  </Grid>
                </Grid>
              </Grid>
              
            </Grid>
        </Grid>
        </Grid>
    </Container>
    </Paper>
  )
}

export default Contact