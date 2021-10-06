import React from 'react'
import ReactDOM from 'react-dom'
// import $ from 'jquery';
// import _ from 'lodash'
// import Search from './components/Search.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moonRise: '',
      moonSet: ''
    }
  }

  render() {
    return (
      <div>
          <div class="row" data-x="0" data-y="0"/>
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('app'));