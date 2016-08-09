// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App';
//
// console.log(App);
// console.log(ReactDOM);
// console.log(React);
//
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('react-container')
// );
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('react-container')
// );

import React from 'react';
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './components/app';
import Audience from './components/Audience';
import Speaker from './components/Speaker';
import Board from './components/Board';
import NotFound from './components/NotFound'

const mountNode = document.getElementById('react-container');

ReactDOM.render(
  <Router history = { hashHistory }>
    <Route path = "/" component = { App }>
      <IndexRoute component = {Audience}></IndexRoute>
      <Route name = "speaker" path = "speaker" component = {Speaker}> </Route>
      <Route name = "board" path = "board" component = {Board}> </Route>
      <Route path ="*" component = {NotFound} >  </Route>
    </Route>
  </Router>,
  mountNode
);
