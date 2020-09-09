import * as actionsType from '../actions.js'

const initialState = {
	counter: 0,

}

const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionsType.INCREMENT:
			return {
				...state,
				counter: state.counter + 1
			}
		case actionsType.DECREMENT:
			return {
				...state,
				counter: state.counter - 1
			}
		case actionsType.ADD:
			return {
				...state,
				counter: state.counter + action.payload
			}
		case actionsType.SUBSTRACT:
			return {
				...state,
				counter: state.counter - action.payload
			}
	}
	return state;
}

export default counterReducer;