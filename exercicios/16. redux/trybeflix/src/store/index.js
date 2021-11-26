import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducer/index';

const store = createStore(
  rootReducer,
  composeWithDevTools(), // plugin Redux DevTools do chrome
);

export default store;
