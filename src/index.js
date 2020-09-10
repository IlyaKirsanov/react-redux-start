import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import counterReducer from './store/reducers/counter'
import resultReducer from './store/reducers/result'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
	ctr: counterReducer,
	res: resultReducer
})

const logger = store =>{
	return (next)=>{
		return (action)=>{
			console.log(`[Middlewate] Dispatching action ` , action);
			const result = next(action)
			console.log(`[Middlewate] Next state `, store.getState());
			return result
		}
	}
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const myStore = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)))

ReactDOM.render(
	<Provider store={myStore}>
		<App />
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();
