import React, { useState, useEffect } from 'react';
import './Palette.css';

import seedColors from './Data/seedColors';
import { generatePalette } from './colorHelper';

import Navbar from './Navbar';
import Footer from './Footer';
import ColorBox from './ColorBox';
import { useParams } from 'react-router-dom';

const Palette = () => {
	const { paletteId } = useParams();
	const { colors, paletteName, emoji } = generatePalette(seedColors.find((palette) => palette.id === paletteId));

	const [level, setLevel] = useState(500);
	const [format, setFormat] = useState('hex');

	const colorBoxes = colors[level].map((color) => {
		return <ColorBox background={color[format]} name={color.name} key={color.name} />;
	});
	return (
		<div className="Palette">
			<Navbar level={level} setLevel={setLevel} format={format} setFormat={setFormat} />
			<div className="Palette-colors">{colorBoxes}</div>
			<Footer paletteName={paletteName} emoji={emoji} />
		</div>
	);
};

export default Palette;
