import * as React from 'react';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Grid, Typography } from '@mui/material';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [theme.breakpoints.down('sm')]: {
    maxWidth: 300
  },
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));


export default function ProgressBar() {
  return (
      <Grid item container direction='column' spacing={2} mt={1}>
      <Grid item xs={3} >
    <Typography variant='body1' sx={{marginBottom: 1}}>PHP 90%</Typography>
     <BorderLinearProgress variant="determinate" value={90} />                       
      </Grid>
       <Grid item xs={3} >
          <Typography variant='body1' sx={{marginBottom: 1}}>JAVASCRIPT 90%</Typography>
     <BorderLinearProgress variant="determinate" value={90} />                       
      </Grid>
       <Grid item xs={3} >
          <Typography variant='body1' sx={{marginBottom: 1}}>Vue.js 85%</Typography>
     <BorderLinearProgress variant="determinate" value={85} />                       
      </Grid>
       <Grid item xs={3} >
          <Typography variant='body1' sx={{marginBottom: 1}}>Laravel 90%</Typography>
     <BorderLinearProgress variant="determinate" value={90} />                       
      </Grid>
    </Grid>
  );
}
