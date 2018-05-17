import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {

  render() {
    return (
      <button className="square" onClick={() => this.props.functest()}>
        {this.props.value}
      </button>
    );
  }
}

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
    newSquares[i] = this.state.player;
    this.setState({squares: newSquares, player: nextPlayer});
  }

  renderSquare(i) {
    return <Square value={this.state.squares[i]} functest={() => this.handleClick(i)} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);