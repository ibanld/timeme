import React, { useEffect, useState } from 'react';
import { Paper, Grid, Typography, LinearProgress } from '@material-ui/core';

export default function Countdown({ timer, countdown, breaker, play, setCountdown }) {
	const [ playBreaker, setPlayBreaker ] = useState(false);

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
			} else if (!playBreaker && countdown < 0) {
				setCountdown(breaker * 60);
				setPlayBreaker(true);
			}
		},
		[ countdown, setCountdown, playBreaker, breaker, timer ]
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

	return (
		<Grid container justify='center' style={{ marginTop: '3vh' }}>
			<Paper id='time-left' elevation={3} style={{ width: '100%', textAlign: 'center' }}>
				<Typography variant='h1'>{convert(countdown)}</Typography>
				{!playBreaker ? (
					<LinearProgress variant='determinate' value={normalise(countdown, timer)} />
				) : (
					<LinearProgress variant='determinate' value={normalise(countdown, breaker)} />
				)}
			</Paper>
		</Grid>
	);
}
