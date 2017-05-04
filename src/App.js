import React, { Component } from 'react';
import logo from './logo.svg';
import CommentBox from './Comment/';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      title:'xxx'
    }
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React  props: {this.state.title}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <CommentBox  />
      </div>
    );
  }
}

export default App;