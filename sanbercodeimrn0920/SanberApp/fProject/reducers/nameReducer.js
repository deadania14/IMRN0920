const initialStateName = {
	name: 'Anonim',
};

const NameReducer = (state = initialStateName, action) => {
	switch (action.type) {
		case 'ACTION_TYPE':
			// return action.Text;
			return Object.assign({}, state, { name: action.Text });

		default:
			return state;
	}
	// 		// name: 'Passanger',
	// 	};
	// }
	// // console.log('test');
	// // return Object.assign({}, state, { name: 'dea' });
	// return state;
};

export default NameReducer;
