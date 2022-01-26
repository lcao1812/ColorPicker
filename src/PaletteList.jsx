import React, { useState, useEffect } from 'react';
import seedColors from './Data/seedColors';
import { Link, useNavigate } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import MiniPalette from './MiniPalette';

const styles = {
	root: {
		backgroundColor: 'blue',
		height: '100vh',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center'
	},
	container: {
		width: '50%',
		height: '100%',
		display: 'flex',
		alignItems: 'flex-start',
		flexDirection: 'column',
		flexWrap: 'wrap'
	},
	nav: {
		display: 'flex',
		justifyContent: 'space-between',
		color: 'white'
	},
	palette: {
		boxSizing: 'border-box',
		width: '100%',
		height: '70%',
		display: 'grid',
		gridTemplateColumns: 'repeat(3, 30%)',
		gridGap: '5%'
	}
};

const PaletteList = ({ classes }) => {
	const paletteList = seedColors.map((palette) => <MiniPalette {...palette}></MiniPalette>);

	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<nav className={classes.nav}>
					<h1>React Colors</h1>
				</nav>
				<div className={classes.palette}>{paletteList}</div>
			</div>
		</div>
	);
};

export default withStyles(styles)(PaletteList);
