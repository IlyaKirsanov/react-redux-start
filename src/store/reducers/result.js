import * as actionsType from '../actions/types.js'
import { updateObject } from '../utility'

const initialState = {
	results: []
}

const deleteResult = (state, action) => {
	const updatedArray = state.results.filter((result) => {
		return result.id !== action.resultElementId
	})
	return updateObject(state, { results: updatedArray })
}

const resultsReducer = (state = initialState, action) => {
	switch (action.type) {
		
		case actionsType.STORE_RESULT:
			return updateObject(state, { results: state.results.concat({ id: new Date().getTime(), value: action.result }) })

		case actionsType.DELETE_RESULT:		
			return deleteResult(state,action)
	}
	return state;
}

export default resultsReducer;