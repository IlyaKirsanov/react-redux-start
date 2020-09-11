import * as actionsType from '../actions/types.js'
import { updateObject } from '../utility'

const initialState = {
	counter: 0,

}

const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionsType.INCREMENT:
			return updateObject(state, { ounter: state.counter + 1 })
		case actionsType.DECREMENT:
			return updateObject(state, { ounter: state.counter - 1})
		case actionsType.ADD:
			return updateObject(state, { counter: state.counter + action.value })
		case actionsType.SUBSTRACT:
			return updateObject(state, {counter: state.counter - action.value})
	}
	return state;
}

export default counterReducer;