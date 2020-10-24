import { createStore, combineReducers } from 'redux';

import { reducer as form } from 'redux-form';

const initialStateName = {
	name: 'Anonim',
};
const reducerText = (state = [initialStateName], action) => {
	switch (action.type) {
		case 'ACTION_TYPE':
			// return action.Text;
			return Object.assign({}, state, { name: action.Text });

		default:
			return state;
	}
};

const Reducers = combineReducers({
	reducerText,
	form,
});

const store = createStore(Reducers);

export default store;
