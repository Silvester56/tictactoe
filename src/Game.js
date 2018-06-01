import React from 'react';
import Board from './Board';

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			playing: false,
			value: "9",
			names: []
		};
	}

	onInput(index, event) {
		let tab = this.state.names;

		tab[index] = event.target.value;
		this.setState({name: tab});
	}

	renderOptions() {
		const limit = 11;
		let str = [];

		for (let i = 3; i < limit; i++) {
			str.push(<option key={i} value={i*i}>{i*i}</option>);
		}
		return str;
	}

	renderPlay() {
		if (this.state.playing) {
			return <Board size={this.state.value} names={this.state.names}/>
		} else {
			return (
				<React.Fragment>
				<select value={this.state.value} onChange={(event) => this.setState({value: event.target.value})}>
					{this.renderOptions()}
				</select>
				<button onClick={() => this.setState({playing: true})}>Go!</button><br/>
				<span>Player X : </span><input onChange={event => this.onInput("X", event)} type="text"/><br/>
				<span>Player O : </span><input onChange={event => this.onInput("O", event)} type="text"/>
				</React.Fragment>
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
			</div>
		);
	}
}

export default Game;
