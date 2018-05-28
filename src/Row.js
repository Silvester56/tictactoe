import React from 'react';
import Square from './Square';

class Row extends React.Component {


	renderSquares() {
		return this.props.squares.map((sqr, index) =>
	  		<Square index={index} value={this.props.squares[index]} functest={() => this.props.callHandleClick(this.props.rowStart + index)} />
	  	);
	}

  render() {
    return (
		<div className="board-row">
      	{this.renderSquares()}
		</div>
    );
  }
}

export default Row;
