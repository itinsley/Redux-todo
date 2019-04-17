import React from 'react';
import {Component} from 'react';

// React component
class Counter extends Component {
  render() {
    const { 
      CountValue, 
      RandoPerson, 
      onIncreaseClick, 
      onDecreaseClick, 
      onFindRandoPersonClick } = this.props
    return (
      <div>
        <span>{CountValue}</span>
        <div>Your rando is ": {RandoPerson.name}</div>
        <button onClick={onIncreaseClick}>Increase</button>
        <button onClick={onDecreaseClick}>Decrease</button>
        <button onClick={onFindRandoPersonClick}>Find Rando</button>
      </div>
    )
  }
}

export default Counter;