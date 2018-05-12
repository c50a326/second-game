import React, { Component } from 'react';

class TicTacToe extends Component {
  constructor(props) {
    super(props);
    this.genBoard = this.genBoard.bind(this);
  }

  render() {
    return (
      <div>
        {this.genBoard(this.props.size)}
      </div>
    );
  }

  genBoard(size) {
    var divs = [];
    for (var i = 0; i < size*size; i++) {
      divs.push(
        <div className="ttt-pane" key={i}>
          <input className="ttt-textbox" type="text" />
        </div>
      );
    }
    return divs;
  }
}

// class TTTPane extends Component {
//   render() {
//     return ();
//   }
// }

export default TicTacToe;
