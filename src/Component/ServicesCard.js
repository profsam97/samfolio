import {  Card, CardActionArea, CardContent, CardHeader, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
const useStyle = makeStyles({
  container : {
    marginBottom : 15
  }
})
const ServicesCard = (props) => {
  const {name, description, icon} = props;
  const classes = useStyle();
  return (
     <Card elevation={0}>
        <CardHeader
        />
        <CardActionArea>
            <CardContent align='center' className='service-box'>
              <Paper elevation={0} className={classes.container}>
              <span className='ico-circle2' > 
              {icon}
              </span>
                <Typography align='center' mt={4}  gutterBottom variant="headline" component="h2">
                    {name}
              </Typography >
              </Paper>
                <Typography variant='subtitle1' component="div" >
                  {description}
              </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
  )
}

export default ServicesCard