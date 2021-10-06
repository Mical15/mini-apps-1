import React from 'react'
import ReactDOM from 'react-dom'
// import Square from './components/Square.jsx'
// import $ from 'jquery';
// import _ from 'lodash'
// import Search from './components/Search.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: 6,
      columns: 7,
      player: 'red',
      moves: []
    }
  }

  getPieces(row, column) {
    const piece = this.state.moves.filter((item) => {
      return (item.row === row && item.column === column)
    })
    return piece[0];
  }


  addMove(row, column) {
    this.setState({moves: this.state.moves.concat({row, column, player: this.state.player})})
    if (this.state.player === 'red') {
      this.setState({player: 'yellow'})
    } else {
      this.setState({player: 'red'});
    }
    console.log(row + ' ' + column + ' ' + this.state.player);
  }


  renderBoard() {
    const rows = [];

    for (let row = 0; row < this.state.rows; row++) {
      const columns = [];
      for (let column = 0; column < this.state.columns; column++) {
        const pieces = this.getPieces(row, column);
        columns.push(
          <div onClick={() => {this.addMove(row, column)}} style={{width: '8vw', height: '8vw', backgroundColor: 'blue', padding: 2, display: 'flex'}}>
          <div style={{width: '8vw', height: '8vw',backgroundColor: 'white', border:'1px solid black', borderRadius:'50%', flex: 1}}>
            {pieces ? <div style={{width: '8vw', height: '8vw', backgroundColor: pieces.player, borderRadius:'50%', border:'1px solid black', flex: 1}}/> : undefined}
          </div>
          </div>
        )
      };
      rows.push(
        <div style={{display: 'flex', flexDirection: 'row'}}>{columns}</div>
      )
    };

    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        {rows}
      </div>
    )
  }

  render() {
     return (
      <div >
        <h1>Lets Play Connect Four!</h1>
        {this.renderBoard()}
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('app'));