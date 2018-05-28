import React from 'react';
import Row from './Row';

class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(9).fill(null),
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
			str.push(<Row rowStart={i} squares={this.state.squares.slice(i, i + step)} callHandleClick={(tmp) => this.handleClick(tmp)}/>);
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
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board;
