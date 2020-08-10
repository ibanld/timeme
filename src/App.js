import React from 'react';
import { Container } from '@material-ui/core';
import Navbar from './components/NavbarComponent';
import Clock from './components/ClockComponent';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Container fixed>
				<Clock />
			</Container>
		</div>
	);
}

export default App;
