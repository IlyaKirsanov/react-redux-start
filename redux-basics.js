const redux = require('redux')
const createStore = redux.createStore

const initialState = {
	counter: 0
}

//Reducer
const rootReducer = (state = initialState, action) => {
	if (action.type === 'INC_COUNTER') {
		return {
			...state,
			counter: state.counter + 1
		}
	}

	if (action.type === 'ADD_COUNTER') {
		return {
			...state,
			counter: state.counter + action.payload
		}
	}
	return state;
}

//Store

const store = createStore(rootReducer);
console.log(store.getState()); // { counter: 0 }

//Subscription
console.log(store.getState()); // { counter: 0 }
store.subscribe(() => {
	console.log('[Subscription]', store.getState());
})

//Dispatching Action

store.dispatch({ type: 'INC_COUNTER' }) // [Subscription] { counter: 1 }
store.dispatch({ type: 'ADD_COUNTER', payload: 10 }) // [Subscription] { counter: 11 }



