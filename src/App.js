import React, { Component } from 'react'
import './App.css';
import Nav from './Nav.js'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: null
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <Nav />
    );
  }
}

export default App;
