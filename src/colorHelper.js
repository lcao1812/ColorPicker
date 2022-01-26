import chroma from 'chroma-js';
const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

const generatePalette = (starterPalette) => {
	let newPalette = {
		paletteName: starterPalette.paletteName,
		id: starterPalette.id,
		emoji: starterPalette.emoji,
		colors: {}
	};

	// initialize the color levels lists
	for (let level of levels) {
		newPalette.colors[level] = [];
	}

	for (let color of starterPalette.colors) {
		let scale = generateScale(color.color, 10);
		// push the colors into the appropriate color list
		for (let i in scale) {
			newPalette.colors[levels[i]].push({
				name: `${color.name} ${levels[i]}`,
				id: color.name.toLowerCase().replace(/ /g, '-'),
				hex: scale[i],
				rgb: chroma(scale[i]).css(),
				rgba: chroma(scale[i]).css().replace('rgb', 'rgba').replace(')', ',1.0)')
			});
		}
	}

	return newPalette;
};

// this function gets a spectrum of colors similar to the hexColor provided.
const getRange = (hexColor) => {
	const start = '#fff';
	const end = chroma(hexColor).darken(1.4).hex();
	return [start, hexColor, end];
};

// create a list of nice [numerOfColors] colors based on the hexColor provided
const generateScale = (hexColor, numberOfColors) => {
	return chroma.scale(getRange(hexColor)).mode('lab').colors(numberOfColors);
};

export { generatePalette };
