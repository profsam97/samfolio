import { Grid } from '@mui/material';
import React from 'react';

export const Loader = () => (
    <Grid container >
        <Grid item xs={5}/>
                <Grid item xs={2}>
              <div className="spinner">
                </div>
             </Grid>
                <Grid item xs={5}/>
    </Grid>
);
