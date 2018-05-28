import React from 'react';
import Board from './Board';

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			playing: false,
			value: "9"
		};
	}

	renderOptions() {
		const limit = 11;
		let str = [];

		for (let i = 3; i < limit; i++) {
			str.push(<option key={i} value={i*i}>{i*i}</option>);
		}
		return str;
	}

	handleChange(event) {
	    this.setState({value: event.target.value});
   }

	renderPlay() {
		if (this.state.playing) {
			return <Board size={this.state.value}/>
		} else {
			return (
				<div>
				<select value={this.state.value} onChange={(event) => this.handleChange(event)}>
					{this.renderOptions()}
				</select>
				<button onClick={() => this.setState({playing: true})}>Go!</button>
				</div>
			);
		}
	}

	render() {
		return (
			<div className="game">
				<div className="game-board">
					<h2>TicTacToe</h2>
					{this.renderPlay()}
				</div>
				<div className="game-info">
					<div>{/* status */}</div>
					<ol>{/* TODO */}</ol>
				</div>
			</div>
		);
	}
}

export default Game;
