import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import User from './features/User';
import Search from './features/Search';
import { AppContainer } from './styles';
import NavBar from './components/NavBar';

const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <AppContainer>
      <NavBar />
      <Router history={history}>
        <Switch>
          <Route exact={true} path='/user/:userId' component={User} />
          <Route path='/' component={Search} />
        </Switch>
      </Router>
    </AppContainer>
  );
};

export default App;
