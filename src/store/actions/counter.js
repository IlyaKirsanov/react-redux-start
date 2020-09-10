import * as actionTypes from './types'

export const increment = () => {
	return {
		type: actionTypes.INCREMENT
	}
}

export const decrement = () => {
	return {
		type: actionTypes.DECREMENT
	}
}

export const add = (value) => {
	return {
		type: actionTypes.ADD,
		payload: value
	}
}

export const substract = (value) => {
	return {
		type: actionTypes.SUBSTRACT,
		payload: value
	}
}