import './App.css';
import { Route, Routes } from 'react-router-dom';

import Palette from './Palette';
import PaletteList from './PaletteList';

function App() {
	return (
		<Routes>
			<Route path="/" element={<PaletteList />} />
			<Route path="/palettes/:paletteId" element={<Palette />} />
			<Route path="/" render={() => <h1>Palette List Goes Here</h1>} />
		</Routes>
	);
}

export default App;
