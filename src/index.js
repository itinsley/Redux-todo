import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import { Provider, connect } from 'react-redux';
import './index.css';
import * as serviceWorker from './serviceWorker';

// React component
class Counter extends Component {
  render() {
    const { value, onIncreaseClick, onDecreaseClick } = this.props
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
        <button onClick={onDecreaseClick}>Decrease</button>
      </div>
    )
  }
}

// Reducer
function counter(state = { count: 0 }, action) {
  const count = state.count
  switch (action.type) {
    case 'increase':
      return { count: count + 1 }
    case 'decrease':
      return { count: count - 1 }
    default:
      return state
  }
}

// Store
const store = createStore(counter)


// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.count
  }
}

const increaseAction = { type: 'increase' };
const decreaseAction = { type: 'decrease' };

function mapDispatchToProps(dispatch){
  return {
    onIncreaseClick: ()=>dispatch(increaseAction),
    onDecreaseClick: ()=>dispatch(decreaseAction),
  }
}

// Connected Component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

ReactDOM.render(
  <Provider store={store}>
    <App />, 
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
