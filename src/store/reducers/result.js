import * as actionsType from '../actions/types.js'

const initialState = {
	results: []
}

const resultsReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionsType.STORE_RESULT:
			return {
				...state,
				results: state.results.concat({ id: new Date().getTime(), value: action.result })
			}
		case actionsType.DELETE_RESULT:
			const updatedArray = state.results.filter((result) => {
				return result.id !== action.resultElementId
			})

			return {
				...state,
				results: updatedArray
			}
	}
	return state;
}

export default resultsReducer;