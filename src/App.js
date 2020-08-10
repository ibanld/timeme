import React from 'react';
import { Container } from '@material-ui/core';
import Navbar from './components/NavbarComponent';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Container fixed>an element</Container>
		</div>
	);
}

export default App;
