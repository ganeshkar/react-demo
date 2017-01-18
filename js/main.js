import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import Master from '../Master.jsx';
import Index from '../Index.jsx';
import Register from '../Register.jsx';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Master}>
      <IndexRoute component={Index} />
      <Route path='/register' component={Register} />
    </Route>
  </Router>,
  document.getElementById('app-container')
);