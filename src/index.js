import React from 'react';
import {render} from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

import App from './App';
import Comment from './Comment';
import News from './News';

import Header from './header'

render((
  <Router>
    <div>
      <Header />

      <ul>
        <li>
          <NavLink activeClassName="selected" to="/">Home</NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to="/comments">comments</NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to="/news">news</NavLink>
        </li>
      </ul>

      <Route path="/" exact strict component={App}/>
      <Route path="/comments" component={Comment}></Route>
      <Route path="/news" component={News}></Route>
    </div>
  </Router>
), document.getElementById('root'));
