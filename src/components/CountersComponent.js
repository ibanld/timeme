import React from 'react'
import { Button, ButtonGroup, Typography, Grid, Paper } from '@material-ui/core'
import { AddCircleOutline, RemoveCircleOutline } from '@material-ui/icons'

function Counters({play, timer, setTimer, breaker, setBreak }) {

    const activeTimer = (<ButtonGroup variant="contained" color="primary" aria-label="session-label" style={{marginTop: '1vh'}}>
                            <Button id='session-increment' onClick={ () => setTimer(prevTimer => prevTimer+1) } ><AddCircleOutline /></Button>
                            {timer < 1 ? '' : 
                                <Button id='session-decrement' onClick={ () => setTimer(prevTimer => prevTimer-1) }><RemoveCircleOutline /></Button>
                            }
                        </ButtonGroup>)

    const activeBreak = (<ButtonGroup variant="contained" color="primary" aria-label="break-label" style={{marginTop: '1vh'}}>
                            {breaker > 59 ? '' :
                                <Button id='break-increment' onClick={ () => setBreak(prevBreak => prevBreak+1) }><AddCircleOutline /></Button>
                            }
                            {breaker < 1 ? '' : 
                                <Button id='break-decrement' onClick={ () => setBreak(prevBreak => prevBreak-1) }><RemoveCircleOutline /></Button>
                            }
                        </ButtonGroup>)

    const disabledButtons = (<ButtonGroup variant="contained" color="primary" aria-label="session-label" style={{marginTop: '1vh'}}>
                                <Button disabled><AddCircleOutline /> </Button>
                                <Button disabled><RemoveCircleOutline /> </Button>
                            </ButtonGroup>)

    return (
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
                            {!play ? activeTimer : disabledButtons}
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
                    {!play ? activeBreak : disabledButtons}
                </Grid>
            </Grid>
        </Grid>
    </div>
    )
}

export default Counters
