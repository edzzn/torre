import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import Search from './features/Search';
import store from './state/store';

import { AppContainer, AppContent } from './styles';
import NavBar from './components/NavBar';

const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppContainer>
        <NavBar />
        <AppContent>
          <Router history={history}>
            <Switch>
              <Route path='/' component={Search} />
            </Switch>
          </Router>
        </AppContent>
      </AppContainer>
    </Provider>
  );
};

export default App;
