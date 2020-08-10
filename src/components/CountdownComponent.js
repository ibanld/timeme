import React, { useEffect } from 'react';
import {Paper, Grid, Typography} from '@material-ui/core'

export default function Countdown({timer, countdown, breaker, play, setCountdown}) {

    useEffect( () => {
        play &&
            setInterval( () => {
                setCountdown(prevTimer=> prevTimer-1)
            }, 1000)
    }, [play, setCountdown])

    console.log(play)

    useEffect( () => {
        countdown < 0 && setCountdown(breaker)
        
    }, [countdown, setCountdown])

	return( 
        <Grid container justify='center' style={{width: '100%', marginTop: '3vh'}}>
            <Paper id='time-left' elevation={3} style={{width: '50%', textAlign:'center'}}>
                <Typography variant='h1'>
                    {countdown}
                </Typography>
            </Paper>
        </Grid>
    );
}
