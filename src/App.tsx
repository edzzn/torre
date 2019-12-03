import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import User from './features/User';
import Search from './features/Search';

const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact={true} path='/user/:userId' component={User} />
        <Route path='/' component={Search} />
      </Switch>
    </Router>
  );
};

export default App;
