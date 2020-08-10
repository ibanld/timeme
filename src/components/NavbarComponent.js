import React from 'react';
import { AppBar, Typography, Toolbar } from '@material-ui/core';

function Navbar() {
	return (
		<AppBar position='static'>
			<Toolbar edge='start' color='palette.success' aria-label='Navbar'>
				<Typography variant='h5'>Time Me!</Typography>
			</Toolbar>
		</AppBar>
	);
}

export default Navbar;
