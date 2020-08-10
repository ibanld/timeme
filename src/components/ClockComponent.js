import React, {useState, useEffect} from 'react'
import Countdown from './CountdownComponent'
import PlayReset from './PlayResetComponent'
import Counters from './CountersComponent'
import {Card, CardHeader, CardContent } from '@material-ui/core'


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
    
    const convert = (time) => {
        let minutes = time;
        let seconds = time - Math.floor(time); 
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        return `${minutes}:${seconds}`; 
    }

    return (
        <>
            <Card style={{marginTop: '3vh'}}>
                <CardHeader
                title= 'Don`t waste your time!'
                style={{textAlign: 'center'}}
                />
                <CardContent>
                    <Counters play = {play} timer={timer} setTimer={setTimer} breaker={breaker} setBreak={setBreak} />
                    <Countdown timer = {timer} countdown={countdown} breaker={breaker} play={play} setCountdown={setCountdown} />
                </CardContent>
                <PlayReset play={play} setPlay={setPlay} handleReset={handleReset} />
            </Card>
        </>
    )
}
