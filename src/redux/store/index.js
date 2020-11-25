import { routerMiddleware } from 'connected-react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import createRootReducer from "../reducers/reducer";

const composeEnhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();
export default function configureStore(initialState) {
  const store = createStore(
    createRootReducer(history),
    initialState,
      composeEnhance(applyMiddleware(thunk, routerMiddleware(history)),
      ),
  );
  return store;
}
