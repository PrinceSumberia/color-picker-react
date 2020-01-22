import React, { Component } from 'react';
import './ColorBox.css';

export default class ColorBox extends Component {
	render() {
		return (
			<div style={{ backgroundColor: this.props.background }} className="ColorBox">
				<span>{this.props.name}</span>
				<span>MORE</span>
			</div>
		);
	}
}
