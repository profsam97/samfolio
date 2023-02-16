import React, { useContext } from 'react'
import Grid from '@mui/material/Grid'
import Typo from './Layout/Typo';
import ContextApi from './Context/ContextAPI'
import { Typography, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ProgressBar from './ProgressBar';

const useStyle = makeStyles((theme) => ({
    container : {
        padding: 20,
        margin: 50,
    [theme.breakpoints.down('sm')]: {
        margin: 10,
        padding: 5
    }
    },
    aboutImg : {
    width: 206, 
    height: 216,
    borderRadius: `3%`
    }
}))
const About = () => {
    const About = useContext(ContextApi).About;
    const classes = useStyle();
  return (
        <Paper ref={About}  className={classes.container} elevation={2}>
     <Grid container  m={2} p={2} elevation={5} spacing={{xs:0, sm:2, md: 3}}>
        <Grid item xs={12} md={6}>
            <Grid item container direction='column' spacing={{xs:0, sm:1, md: 2}} >
                        <Grid item container spacing={0}>
                        <Grid item xs={12} sm={4} md={4} lg={4} xl={3}>         
                       <img src='../assets/img/profs.jpg'
                       alt='My'
                        className={classes.aboutImg} />
                        </Grid>
                        <Grid  item xs={0} sm={1.5} md={2.5} lg={1} xl={1}/>
                         <Grid item xs={12} sm={6} md={5.5} lg={7} xl={8}>          
                           <Grid item container direction='column' spacing={3}>
                            <Grid item xs={2}>
                            <Typography> <b>Name :</b> Oladejo Samuel</Typography>
                            </Grid>  
                                 <Grid item xs={2}>
                    <Typography> <b>Profile :</b> Full Stack Engineer</Typography>
                            </Grid>  
                                 <Grid item xs={2}>
                       <Typography><b>Email:</b>  proftoby97@gmail.com</Typography>        
                            </Grid>  
                                 <Grid item xs={2}>
                <Typography><b> Phone:</b> +2348180436525
                    </Typography>

                            </Grid>   
                            </Grid> 
                        </Grid>
                        </Grid>
                          <Grid item  xs={6}>
                            
                        </Grid>
                        <Grid item xs={6}>
                        <Typo >Skill</Typo>
                        <ProgressBar/>  

                        </Grid>
            </Grid>
        </Grid>

         <Grid item xs={12} md={6}>
            <Grid item container direction='column' spacing={2}>
                <Grid item xs={3}>
                    <Typography variant= 'h3' className='title-left' >About Me </Typography>
                </Grid>
                <Grid item xs={9} p={3} mt={3}>
                    <Typography  variant='subtitle1' letterSpacing={1}  >
                        Hi, I am Oladejo Samuel am a Nigerian. I started as a frontend developer for about 6 years now. Over the course of years, I learn several new technologies.
                    </Typography>

                  <Typography  variant='subtitle1' mt={2} letterSpacing={1}>
            I am an energetic and imaginative developer who is able to work alongside other talented IT professionals in creating software to the very highest standards. I have a high awareness of industry issues and trends, particularly in regard to accessibility, usability and emerging technologies. I am the ambitious type who with the drive and energy to make a difference to a project.
            </Typography>
            <Typography  variant='subtitle1' mt={2} letterSpacing={1}  >
            I am self motivated, resolute and willing to learn valuable skills at my own pace, I am willing to go above and beyond any project.
            </Typography>
                </Grid>
                </Grid> 
        </Grid>
        </Grid>
                </Paper>
  )
}

export default About;