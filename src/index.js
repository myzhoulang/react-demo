import React from 'react'
import { render } from 'react-dom'
import './index.css'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'

import App from './App'
import { Comment } from './Comment'
import News from './News'
import NotFound from './NotFound'
import Header from './header'

console.log(Comment);
debugger

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
      <Switch>
        <Route path="/" exact strict component={App}/>
        <Route path="/comments" component={Comment}></Route>
        <Route path="/news" component={News}></Route>
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  </Router>
), document.getElementById('root'));
