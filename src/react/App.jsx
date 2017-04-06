import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers/reducers.jsx';

require('./services/gatracking.jsx');

import Routes from './Routes.jsx';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

ReactDOM.render(
  	<Provider store={createStoreWithMiddleware(reducers)}>
    	<Routes />
  	</Provider>
, document.getElementById('app'));
