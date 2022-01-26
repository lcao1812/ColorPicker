import React from 'react';
import './Footer.css';

const Footer = ({ paletteName, emoji }) => {
	return (
		<footer className="Footer">
			{paletteName}
			<span className="Footer-emoji">{emoji}</span>
		</footer>
	);
};

export default Footer;
