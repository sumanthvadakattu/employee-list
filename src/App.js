import React from 'react';
import LoginPage from './component/LoginPage';
import UserListPage from './containers/userListPage';
import {
  Route, Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore, { history } from './store/configureStore';
import { ConnectedRouter } from 'react-router-redux'


function App() {
  history.push('/login');
  return (
    <Provider store={configureStore}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/userList" component={UserListPage} />
        </Switch>
    </ConnectedRouter>
  </Provider>
  );
}

export default App;

