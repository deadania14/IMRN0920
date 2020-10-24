import { combineReducers } from 'redux';
import NameReducer from './nameReducer';
import { reducer as form } from 'redux-form';

const reducer = combineReducers({ NameReducer, form });
// const reducer = {NameReducer};

export default reducer;
