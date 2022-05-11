import { Grid, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useContext } from 'react'
import Typo from './Layout/Typo'
import ServicesCard from './ServicesCard'
import services from '../Data/Services'
import ContextApi from './Context/ContextAPI'
const useStyle = makeStyles(theme => ({
 container : {
        padding: 40,
        margin: 40,
        [theme.breakpoints.down('sm')]: {
        padding: 5,
        margin:  5,
        }
    }
}))
const Service = () => {
    const service = useContext(ContextApi).Service;
    const classes = useStyle();
  return (
    <Paper ref={service} className={classes.container} elevation={0}>
        <Grid container direction='column'  spacing={4}>
            <Grid item xs={4}>
                <Typography variant='h3' align='center'> <b>SERVICES</b></Typography>
                <Typo options={{ variant : 'body2', textAlign: 'center'}}>
                    Below are some of the services i offer.
                </Typo>
            </Grid>
            <Grid item xs={2}/>
            <div className='line-mf'></div>
            <Grid item xs={6}>
                <Grid item container spacing={2}>
                    {services.map(item => {
                    const {name, description, icon} = item;
                    return (
                      <Grid item xs={12} sm={6} md={4}  key={name} >
                        <ServicesCard name={name} description={description}
                        icon={icon}/>
                    </Grid>
                    )
                    
                    })}
      
                </Grid>
            </Grid>

        </Grid>
    </Paper>
  )
}

export default Service