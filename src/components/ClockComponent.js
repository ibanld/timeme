import React, {useState, useEffect} from 'react'
import Countdown from './CountdownComponent'
import {Card, CardHeader, CardContent, CardActions, Button, ButtonGroup, Typography, Grid, Paper} from '@material-ui/core'
import { PlayCircleFilled, PauseCircleFilled, UpdateRounded, AddCircleOutline, RemoveCircleOutline } from '@material-ui/icons'

export default function Clock() {
    const [timer, setTimer] = useState(25)
    const [breaker, setBreak] = useState(5)
    

    return (
        <>
            <Card style={{marginTop: '3vh'}}>
                <CardHeader
                title= 'Select your countdown!'
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
                                    <Paper id='session-length' variant='outlined' elevation={3} style={{width: '50%'}}>
                                        <Typography variant='h4'>Time left</Typography>
                                    </Paper> 
                                    <ButtonGroup variant="contained" color="primary" aria-label="session-label" style={{marginTop: '1vh'}}>
                                        <Button id='session-increment'><AddCircleOutline /></Button>
                                        <Button id='session-decrement'><RemoveCircleOutline /></Button>
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
                                    <Paper id="break-length" variant='outlined' elevation={3} style={{width: '50%'}}>
                                        <Typography variant='h4'>Time left</Typography>
                                    </Paper>
                                    <ButtonGroup variant="contained" color="primary" aria-label="break-label" style={{marginTop: '1vh'}}>
                                        <Button id='break-increment'><AddCircleOutline /></Button>
                                        <Button id='break-decrement'><RemoveCircleOutline /></Button>
                                    </ButtonGroup>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>

                    <Countdown />
                </CardContent>
                <CardActions>
                    <Grid container
                        direction="row"
                        justify="space-evenly"
                        alignItems="baseline"
                    > 
                        <Button id='start_stop'>
                                <PlayCircleFilled color='primary'/>
                        </Button>
                        <Button id='pause'>
                            <PauseCircleFilled color='primary'/>
                        </Button>
                        <Button id='reset'>
                            <UpdateRounded color='primary'/>
                        </Button>
                    </Grid>
                </CardActions>
            </Card>
        </>
    )
}
