import * as actionsType from './actions.js'

const initialState = {
	counter: 0,
	results: []
}

const reducer = (state = initialState, action) => {
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
		case actionsType.STORE_RESULT:
			return {
				...state,
				results: state.results.concat({ id: new Date(), value: state.counter })
			}
		case actionsType.DELETE_RESULT:
			// const newArr = [...state.results]
			// newArr.splice(id,1)
			const updatedArray = state.results.filter((result) =>{
				return result.id !== action.resultElementId
			})

			return {
				...state,
				results: updatedArray
			}
	}
	return state;
}

export default reducer;