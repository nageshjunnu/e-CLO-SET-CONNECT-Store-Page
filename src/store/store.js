import { createStore, combineReducers } from 'redux';
import contentsReducer from './reducers/contentsReducer';

const rootReducer = combineReducers({
  contents: contentsReducer,
});

const store = createStore(rootReducer);

export default store;