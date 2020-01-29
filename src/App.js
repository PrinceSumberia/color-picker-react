import React from 'react';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
	findPalette(id) {
		return seedColors.find(function(palette) {
			return palette.id === id;
		});
	}
	render() {
		console.log(generatePalette(seedColors[4]));
		return (
			<Switch>
				<Route exact path="/" render={(routeProps) => <PaletteList palettes={seedColors} {...routeProps} />} />
				<Route
					exact
					path="/palette/:id"
					render={(routeProps) => (
						<Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />
					)}
				/>
				<Route path="/palette/:paletteId/:colorId" render={() => <SingleColorPalette />} />
			</Switch>
		);
	}
}

export default App;
