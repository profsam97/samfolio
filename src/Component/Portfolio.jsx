import { Grid, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useContext } from 'react'
import Typo from './Layout/Typo'
import Work from './Work'
import PortDetails from '../Data/PortDetails'
import ContextApi from './Context/ContextAPI'
const useStyle = makeStyles({
 container : {
        padding: 40,
        margin: 40
    }
})
const Portfolio = () => {
    const classes = useStyle();
    const port = useContext(ContextApi).Work;
  return (
    <Paper ref={port} className={classes.container} elevation={0}>
        <Grid container direction='column'  spacing={4}>
            <Grid item xs={4}>
                <Typography variant='h3' sx={{textAlign : 'center'}}> <b>PORTFOLIO</b></Typography>
                <Typo options={{ variant : 'body', textAlign: 'center'}}>
                        Below are some of the works i have done.
                </Typo>
            </Grid>
            <Grid item xs={2}/>
            <div className='line-mf'></div>
            <Grid item xs={6}>
                               <Grid item container spacing={2}>
                    {PortDetails.map(item => {
                    const {image, SubTitle, Title, date} = item;
                    return (
                      <Grid item xs={12} sm={4} key={Title} >
                        <Work date={date} subTitle={SubTitle} image={image} title={Title}/>
                    </Grid>
                    )
                    
                    })}
      
                </Grid>
            </Grid>

        </Grid>
    </Paper>
  )
}

export default Portfolio;