import React, {useState, useEffect} from 'react'
import Countdown from './CountdownComponent'
import PlayReset from './PlayResetComponent'
import Counters from './CountersComponent'
import {Card, CardHeader, CardContent } from '@material-ui/core'


export default function Clock() {
    const [timer, setTimer] = useState(25)
    const [breaker, setBreak] = useState(5)
    const [play, setPlay] = useState(false)  
    const [countdown, setCountdown] = useState()
    const [disableBtn, setDisableBtn] = useState(false)

    const handleReset = () => {
        setCountdown(timer)
        setTimer(25)
        setBreak(5)
        setPlay(false)
        setDisableBtn(false)
    }

    useEffect( () => {
        setCountdown(timer);
    }, [timer]);

    useEffect( () => {
        play && setDisableBtn(true);
    }, [play])

    return (
        <>
            <Card style={{marginTop: '3vh'}}>
                <CardHeader
                title= 'Don`t waste your time!'
                style={{textAlign: 'center'}}
                />
                <CardContent>
                    <Counters disableBtn = {disableBtn} timer={timer} setTimer={setTimer} breaker={breaker} setBreak={setBreak} />
                    <Countdown timer = {timer} countdown={countdown} breaker={breaker} play={play} setCountdown={setCountdown} />
                </CardContent>
                <PlayReset play={play} setPlay={setPlay} handleReset={handleReset} />
            </Card>
        </>
    )
}
