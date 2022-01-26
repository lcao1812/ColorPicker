import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Link, useNavigate } from 'react-router-dom';
import { colors } from '@material-ui/core';

const styles = {
	root: {
		backgroundColor: 'white',
		border: '1px solid black',
		borderRadius: '5px',
		padding: '0.5rem',
		position: 'relative',
		overflow: 'hidden',
		'&:hover': {
			cursor: 'pointer'
		}
	},

	colors: {
		backgroundColor: 'grey',
		height: '70%',
		width: '100%',
		borderRadius: '5px',
		overflow: 'hidden'
	},

	title: {
		display: 'flex',
		justifyContent: 'space-between',
		alighItems: 'center',
		margin: '0',
		padding: '0 0 0 0',
		color: 'black',
		fontSize: '1rem',
		position: 'relative'
	},

	emoji: {
		margin: '0 0 0 3rem',
		fontSize: '1.5rem'
	},
	miniColor: {
		height: '25%',
		width: '20%',
		display: 'inline-block',
		margin: '0 auto',
		position: 'relative',
		margin: '0 0 -3.5px 0'
	}
};

const MiniPalette = ({ classes, colors, emoji, id, paletteName }) => {
	let navigate = useNavigate();

	const miniColorBoxes = colors.map((color) => (
		<div className={classes.miniColor} style={{ backgroundColor: color.color }} key={color.name}></div>
	));

	return (
		<div className={classes.root} onClick={() => navigate(`/palettes/${id}`)}>
			<div className={classes.colors}>{miniColorBoxes}</div>
			<h5 className={classes.title}>
				{paletteName} <span className={classes.emoji}>{emoji}</span>
			</h5>
		</div>
	);
};

export default withStyles(styles)(MiniPalette);
