import React, { useState, useEffect } from 'react';
import Slider from 'rc-slider';
import { Select, MenuItem, Snackbar, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { useNonInitialEffect } from './hooks/useNonInitialEffect';
import { Link } from 'react-router-dom';

import 'rc-slider/assets/index.css';
import './Navbar.css';

const Navbar = ({ level, setLevel, format, setFormat }) => {
	const [snackbar, toggleSnackbar] = useState(false);

	useNonInitialEffect(() => {
		toggleSnackbar(true);
	}, [format]);

	return (
		<header className="Navbar">
			<div className="logo">
				<Link to={`/`}>ReactColorPicker</Link>
			</div>
			<div className="level-container">
				<span className="level-text">Level: {level}</span>
				<div className="slider">
					<Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={(level) => setLevel(level)} />
				</div>
			</div>
			<div className="select-container">
				<Select value={format} onChange={(event) => setFormat(event.target.value)}>
					<MenuItem value="hex">HEX - #ffffff</MenuItem>
					<MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
					<MenuItem value="rgba">RGBA - rgba(255,255,255, 1.0)</MenuItem>
				</Select>
			</div>

			<Snackbar
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
				open={snackbar}
				autoHideDuration={3000}
				onClose={() => toggleSnackbar(false)}
				message={
					<span id="snackbar-id">
						Now Using <b>{format.toUpperCase()}</b> Format
					</span>
				}
				ContentProps={{
					'aria-describedby': 'snackbar-id'
				}}
				action={
					<IconButton onClick={() => toggleSnackbar(false)} color="inherit" key="close" aria-label="close">
						<Close />
					</IconButton>
				}
			/>
		</header>
	);
};

export default Navbar;
