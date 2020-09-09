import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actionsType from '../../store/actions'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

	render() {
		return (
			<div>
				<CounterOutput value={this.props.myCounter} />
				<CounterControl label="Increment" clicked={this.props.onIncrementCouter} />
				<CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
				<CounterControl label="Add 5" clicked={() => this.props.onAddCounter(5)} />
				<CounterControl label="Subtract 5" clicked={() => this.props.onSubtractCounter(5)} />
				<hr/>
				<button onClick={()=>this.props.onStoreResult(this.props.myStoredResults)}>Store Result</button>
				<ul>
					{
						this.props.myStoredResults.map(strResult=>{
							return <li 
							key={strResult.id} 
							onClick={()=>this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
						})
					}
					
				</ul>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		myCounter: state.ctr.counter,
		myStoredResults: state.res.results
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onIncrementCouter: () => { dispatch({ type: actionsType.INCREMENT}) },
		onDecrementCounter: () => { dispatch({ type: actionsType.DECREMENT})},
		onAddCounter: (value) => { dispatch({ type: actionsType.ADD, payload: value})},
		onSubtractCounter: (value) => { dispatch({ type: actionsType.SUBSTRACT, payload: value})},
		onStoreResult: (result) => dispatch({ type: actionsType.STORE_RESULT, result: result}),
		onDeleteResult: (id) => dispatch({ type: actionsType.DELETE_RESULT, resultElementId: id})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);