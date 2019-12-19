import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import appReducer from '../reducers';

export const history = createHistory({
  basename: process.env.PUBLIC_URL,
});

const initialState = {};
const middleware = [routerMiddleware(history)];

const composedEnhancers = compose(
  applyMiddleware(...middleware),
);

export default createStore(appReducer, initialState, composedEnhancers);
