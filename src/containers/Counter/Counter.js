import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actionCreators from '../../store/actions/index'

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
				<hr />
				<button onClick={() => this.props.onStoreResult(this.props.myCounter)}>Store Result</button>
				<ul>
					{
						this.props.myStoredResults.map(strResult => {
							console.log(strResult);
							return <li
								key={strResult.id}
								onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
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
		onIncrementCouter: () => { dispatch(actionCreators.increment()) },
		onDecrementCounter: () => { dispatch(actionCreators.decrement()) },
		onAddCounter: (value) => { dispatch(actionCreators.add(value)) },
		onSubtractCounter: (value) => { dispatch(actionCreators.substract(value)) },
		onStoreResult: (result) => dispatch(actionCreators.storeResults(result)),
		onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);