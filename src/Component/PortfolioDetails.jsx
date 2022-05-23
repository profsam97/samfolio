import { Container, Divider, Grid, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { useParams } from 'react-router-dom'
import imageCollection from '../Data/PortDetails'
import Swiper from './Swiper'
const useStyle = makeStyles({
    container : {
        padding: 20,
        marginTop: 30,
        marginBottom: 0
    },
    list: {
    listStyle: 'none',
    padding: 0,
    marginTop: 20,
    fontSize: `15px`
    }
})

const PortfolioDetails = () => {
const params = useParams();
const title = params.details;
const filteredImages = imageCollection.filter(image => image.Title === title);
const {images, date, SubTitle} = filteredImages[0];
    const classes = useStyle();
  return (
    <Paper className= {classes.container} elevation={0}>
        <Container>
            <Grid container spacing={3} >
                <Grid item xs={12} md={8}>
                <Swiper images={images}/>
                </Grid>
                <Grid item md={4} xs={12}>
                  <Grid item container direction='column' spacing={2}>
                    <Grid item xs={6} >
             <Typography variant='h5'  mb={2}><b>Project information</b>
            </Typography>
              <Divider />
                 <ul className={classes.list}>
                 <li><Typography variant='body1'><b>Category: </b>{filteredImages[0].info.Category}</Typography></li> 
                 <li><Typography variant='body1'><b>Client: </b>{filteredImages[0].info.Client}</Typography></li>
                 <li><Typography variant='body1'><b>Project Date: </b>{date}</Typography></li>  
                 <li><Typography variant='body1'><b>Url :<a href={filteredImages[0].info.url} rel='noreferrer' target='_blank'>{SubTitle}</a></b></Typography></li> 
                </ul>
                    </Grid>    
                       <Grid item xs={6}>
                     <Typography variant='h5'>
                         <b>Below are some of the features</b>
                     </Typography>
                     <Typography variant='body1'>
                      {filteredImages[0].description}
                     </Typography>
                    </Grid> 
                    </Grid>  
                </Grid>
            </Grid>
        </Container>
    </Paper>
  )
}

export default PortfolioDetails