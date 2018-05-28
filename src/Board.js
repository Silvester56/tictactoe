import React from 'react';
import Row from './Row';

class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(parseInt(this.props.size)).fill(null),
        player: "X"
      };
  }

  handleClick(i) {
    const newSquares = this.state.squares.slice();
    const nextPlayer = this.state.player == 'X' ? 'O' : 'X';
	 console.log(i);

    if (calculateWinner(newSquares) || newSquares[i]) {
      return;
    }
    newSquares[i] = this.state.player;
    this.setState({squares: newSquares, player: nextPlayer});
  }

  renderFor() {
	  let str = [];
	  let step = Math.sqrt(this.state.squares.length);

	   for (let i = 0; i < this.state.squares.length; i = i + step) {
			str.push(<Row key={i} rowStart={i} squares={this.state.squares.slice(i, i + step)} callHandleClick={(tmp) => this.handleClick(tmp)}/>);
		}
		return str;
  }

  render() {
    const winner = calculateWinner(this.state.squares);

    return (
      <div>
        <div className="status">{winner ? 'Winner : ' + winner : 'Current player: ' + this.state.player}</div>
          {this.renderFor()}
      </div>
    );
  }
}

function calculateWinner(squares) {
  let squareRoot =  Math.sqrt(squares.length);
  let lines = [];
  let tmp = [];
  let winner = true;
  let firstValue = "";

  for (let i = 0; i < squares.length; i = i + squareRoot) { // Add all possible rows
	  tmp = [];
    for (let j = i; j < i + squareRoot; j++) {
    	tmp.push(j);
    }
	 lines.push(tmp);
  }

  for (let i = 0; i < squareRoot; i++) { // Add all possible columns
  	tmp = [];
    for (let j = i; j < i + 1 + squares.length - squareRoot; j = j + squareRoot) {
  	   tmp.push(j);
    }
    lines.push(tmp);
  }

  tmp = [];
  for (let i = 0; i < squares.length; i = i + squareRoot + 1) { // Add the top left to bottom right diagonal
	 tmp.push(i);
  }
  lines.push(tmp);

  tmp = [];
  for (let i = squareRoot - 1; i < squares.length; i = i + squareRoot - 1) { // Add the top right to bottom left diagonal
   tmp.push(i);
  }
  lines.push(tmp);

  for (let i = 0; i < lines.length; i++) {
	  firstValue = squares[lines[i][0]];
	  winner = true;
    for (let j = 1; j < lines[i].length; j++) {
    	if (!firstValue || firstValue != squares[lines[i][j]]) {
    		winner = false;
    	}
    }
	 if (winner) {
	 	return firstValue;
	 }
  }
  return null;
}

export default Board;
