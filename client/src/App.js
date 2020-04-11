import React from 'react';
import './App.css';
import Nav from './components/Nav';
import None from './components/None';
import Cards from './components/Cards';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Join from './components/Join';
import Chat from './components/Chat/Chat';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/' component={None} />
        <Route path='/search' component={Cards} />
        <Route path='/join' component={Join} />
        <Route path='/chat' component={Chat} />
      </Switch>
    </Router>
  );
}

export default App;
