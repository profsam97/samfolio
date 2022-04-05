import { AddBoxOutlined } from '@mui/icons-material';
import {  Card, CardActionArea, CardContent, CardHeader, Paper, Typography, CardMedia, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom';
// import { SRLWrapper } from 'simple-react-lightbox';
const useStyle = makeStyles({
  container : {
    marginBottom : 15
  },
   link: {
    textDecoration: 'none',
    color: '#fff'
  }
})
const Work = (props) => {
  const {image, subTitle, title, date} = props;
  const classes = useStyle();
  return (
     <Card elevation={0}>
        <CardHeader
        />
        {/* <CardMedia title="" image={require(`${image}`)}
        sx={{height: '250px', width: '350px'}} /> */}
        <CardActionArea>
            <CardContent  className='service-box'>
                <Typography variant='h6' component="div" >
                  {title}
              </Typography>
              {/* <SRLWrapper> */}
      <a href={image}>
        <img src={image} alt='work' style={{height: '200px', width: '350px'}}/>      </a>
      {/* </SRLWrapper> */}
             
              <Grid container>
                  <Grid item xs={8} mt={1}  >
                    <Typography variant='subtitle2' >
                        {subTitle} / {date}
                    </Typography>
                  </Grid>
                  <Grid item xs={2}/>
                <Grid item xs={2} >
                  <Link to={`/${title}`} className={classes.link}>
                     <AddBoxOutlined sx={{borderRadius: '50px'}} fontSize='large' color='info'/>
                  </Link>
                </Grid>
              </Grid>
            </CardContent>
        </CardActionArea>
    </Card>
  )
}

export default Work;