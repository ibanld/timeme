import React from 'react'
import { CardActions, Grid, Button } from '@material-ui/core'
import { PlayCircleFilled, PauseCircleFilled, UpdateRounded } from '@material-ui/icons'

export default function PlayReset({play, handleReset, setPlay}) {

    return (
        <CardActions>
                    <Grid container
                        direction="row"
                        justify="space-evenly"
                        alignItems="baseline"
                    > 

                        <Button id='start_stop' onClick= { ()=> { setPlay(!play) } }>
                            {!play ? 
                                <PlayCircleFilled color='primary'/>
                            :
                                <PauseCircleFilled color='primary'/>
                            }
                        </Button>
                        <Button id='reset'>
                            <UpdateRounded color='primary' onClick={ () => handleReset() }/>
                        </Button>
                    </Grid>
                </CardActions>
    )
}
