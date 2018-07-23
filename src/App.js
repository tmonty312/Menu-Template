import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Create from './components/Create'
import Pies from './components/Pies'
import Menue from'./components/Menue'
import axios from 'axios'


class App extends Component {
  constructor(){
  super()

    this.state = {
      pies: []
    }
  }

  componentDidMount(){
    axios.get('/api/pies').then(results => {
      this.setState({pies: results.data})
    })
  }

  updatePies= (pies) => {
    this.setState({pies})
  }

  render() {
    return (
      <div className="App">
        <Create updatePies={this.updatePies}/>
        <Menue updatePies={this.updatePies}pies={this.state.pies}/>
      </div>
    );
  }
}

export default App;
