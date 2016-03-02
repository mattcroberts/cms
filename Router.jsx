import { createStore, combineReducers } from 'redux';
import { Provider }                     from 'react-redux';
import reducers                    from './reducers';
import { browserHistory as history } from 'react-router'
import routes  from './routes';

const reducer = combineReducers(reducers);
const store   = createStore(reducer, initialState);
let initialState = window.__INITIAL_STATE__;

render(
  <Provider store={store}>
      <Router children={routes} history={history} />
  </Provider>,
  document.getElementById('root')
);
