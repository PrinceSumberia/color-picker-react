import React from 'react';
import Palette from './Palette';
import PaletteList from './PaletteList';
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
				<Route exact path="/" render={() => <PaletteList palettes={seedColors} />} />
				<Route
					exact
					path="/palette/:id"
					render={(routeProps) => (
						<Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />
					)}
				/>
			</Switch>
			// <div>
			// 	<Palette palette={generatePalette(seedColors[4])} />
			// </div>
		);
	}
}

export default App;
