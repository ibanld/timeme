import React, { useEffect, useState } from 'react';
import {Paper, Grid, Typography} from '@material-ui/core'

export default function Countdown({timer, countdown, breaker, play, setCountdown}) {
    const [playBreaker, setPlayBreaker] = useState(false)

    useEffect( () => {
        if (play) {
            var interval = setInterval( () => {
                    setCountdown(prevTimer=> prevTimer-1)
                }, 1000);
        }
            return () => clearInterval(interval)
    }, [play, playBreaker, setCountdown])
    
    useEffect( () => {
        if(playBreaker && countdown < 0) {
            setCountdown(timer);
            setPlayBreaker(false);
        }else if (!playBreaker && countdown < 0) {
            setCountdown(breaker)
            setPlayBreaker(true)
        }

    }, [countdown, setCountdown, playBreaker, breaker, timer])

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
