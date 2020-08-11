import React, { useEffect, useState } from 'react';
import { Paper, Grid, Typography, LinearProgress } from '@material-ui/core';
import useSound from 'use-sound';
import alert from '../alert.mp3';

export default function Countdown({ timer, countdown, breaker, play, setCountdown }) {
	const [ playBreaker, setPlayBreaker ] = useState(false);
	const [ showTimer, setShowTimer ] = useState(false);
	const [ playAlert ] = useSound(alert);

	useEffect(
		() => {
			if (play) {
				var interval = setInterval(() => {
					setCountdown((prevTimer) => prevTimer - 1);
				}, 1000);
			}
			return () => clearInterval(interval);
		},
		[ play, playBreaker, setCountdown ]
	);

	useEffect(
		() => {
			if (playBreaker && countdown < 0) {
				setCountdown(timer * 60);
				setPlayBreaker(false);
				setShowTimer(true);
				setTimeout(() => {
					setShowTimer(false);
				}, 2000);
				playAlert();
			} else if (!playBreaker && countdown < 0) {
				setCountdown(breaker * 60);
				setPlayBreaker(true);
				setShowTimer(true);
				setTimeout(() => {
					setShowTimer(false);
				}, 2000);
				playAlert();
			}
		},
		[ countdown, setCountdown, playBreaker, breaker, timer, playAlert ]
	);

	const convert = (time) => {
		let minutes = Math.floor(time / 60);
		let seconds = time - minutes * 60;
		function str_pad_left(string, pad, length) {
			return (new Array(length + 1).join(pad) + string).slice(-length);
		}
		let finalTime = str_pad_left(minutes, '0', 2) + ':' + str_pad_left(seconds, '0', 2);
		return finalTime;
	};

	const normalise = (countdown, total) => 100 * countdown / (total * 60);
	const text = !playBreaker ? 'Session Started' : 'Break Started';

	return (
		<Grid container justify='center' style={{ marginTop: '3vh' }}>
			<Paper elevation={3} style={{ width: '100%', textAlign: 'center' }}>
				<Typography id='time-left' variant='h1'>
					{convert(countdown)}
				</Typography>

				{showTimer && (
					<Typography id='timer-label' variant='h4'>
						{text}
					</Typography>
				)}

				{!playBreaker ? (
					<LinearProgress variant='determinate' value={normalise(countdown, timer)} />
				) : (
					<LinearProgress variant='determinate' value={normalise(countdown, breaker)} />
				)}
			</Paper>
			{/*React @useSound hook used instead of HTML5 audio element*/}
			<p id='beep' />
		</Grid>
	);
}
