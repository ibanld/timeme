import React, {useState, useEffect} from 'react'
import Countdown from './CountdownComponent'
import PlayReset from './PlayResetComponent'
import {Card, CardHeader, CardContent, CardActions, Button, ButtonGroup, Typography, Grid, Paper} from '@material-ui/core'
import { AddCircleOutline, RemoveCircleOutline } from '@material-ui/icons'

export default function Clock() {
    const [timer, setTimer] = useState(25)
    const [breaker, setBreak] = useState(5)
    const [play, setPlay] = useState(false)  
    const [countdown, setCountdown] = useState(timer)

    const handleReset = () => {
        setCountdown(timer)
        setTimer(25)
        setBreak(5)
        setPlay(false)
    }

    useEffect( () => {
        setCountdown(timer);
        
    }, [timer]);
    

    
    return (
        <>
            <Card style={{marginTop: '3vh'}}>
                <CardHeader
                title= 'Don`t waste your time!'
                style={{textAlign: 'center'}}
                />
                <CardContent>
                    <div id="counters" style={{flexGrow: 1}}>
                        <Grid container justify='center' spacing={2}>
                            <Grid item md={5} id='session-label'>
                                <Grid
                                    container
                                    direction="column"
                                    justify="center"
                                    alignItems="center"
                                >
                                    <Paper id='session-length' variant='outlined' elevation={3} style={{width: '50%', textAlign:'center'}}>
                                        <Typography variant='h4'>{timer}</Typography>
                                    </Paper> 
                                    <ButtonGroup variant="contained" color="primary" aria-label="session-label" style={{marginTop: '1vh'}}>
                                        <Button id='session-increment' onClick={ () => setTimer(prevTimer => prevTimer+1) }><AddCircleOutline /></Button>
                                        {timer < 1 ? '' : 
                                            <Button id='session-decrement' onClick={ () => setTimer(prevTimer => prevTimer-1) }><RemoveCircleOutline /></Button>
                                        }
                                    </ButtonGroup>
                                </Grid>
                            </Grid>
                            <Grid item md={5} id='break-label'>
                                <Grid
                                    container
                                    direction="column"
                                    justify="center"
                                    alignItems="center"
                                >
                                    <Paper id="break-length" variant='outlined' elevation={3} style={{width: '50%', textAlign:'center'}}>
                                        <Typography variant='h4'>{breaker}</Typography>
                                    </Paper>
                                    <ButtonGroup variant="contained" color="primary" aria-label="break-label" style={{marginTop: '1vh'}}>
                                        {breaker > 59 ? '' :
                                            <Button id='break-increment' onClick={ () => setBreak(prevBreak => prevBreak+1) }><AddCircleOutline /></Button>
                                        }
                                        {breaker < 1 ? '' : 
                                            <Button id='break-decrement' onClick={ () => setBreak(prevBreak => prevBreak-1) }><RemoveCircleOutline /></Button>
                                        }
                                    </ButtonGroup>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>

                    <Countdown timer = {timer} countdown={countdown} breaker={breaker} play={play} setCountdown={setCountdown} />

                </CardContent>
                <PlayReset play={play} handleReset={handleReset} setPlay={setPlay} />
                
            </Card>
        </>
    )
}
