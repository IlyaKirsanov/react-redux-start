import React, { Component } from 'react';
import { connect } from 'react-redux'

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
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		myCounter: state.counter
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onIncrementCouter: () => { dispatch({ type: 'INCREMENT' }) },
		onDecrementCounter: ()=>{dispatch({type:'DECREMENT'})},
		onAddCounter: (value)=>{dispatch({type: 'ADD', payload: value})},
		onSubtractCounter: (value) => { dispatch({ type: 'SUBSTRACT', payload: value})}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);