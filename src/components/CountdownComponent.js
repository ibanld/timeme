import React from 'react';
import {Paper, Grid} from '@material-ui/core'

export default function Countdown(props) {
	return( 
        <Grid container justify='center' style={{width: '100%', marginTop: '3vh'}}>
            <Paper elevation={3} square >Countdown element</Paper>
        </Grid>
    );
}
