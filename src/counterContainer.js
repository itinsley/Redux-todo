const increaseAction = { type: 'increase' };
const decreaseAction = { type: 'decrease' };

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.count
  }
}

function mapDispatchToProps(dispatch){
  return {
    onIncreaseClick: ()=>dispatch(increaseAction),
    onDecreaseClick: ()=>dispatch(decreaseAction),
  }
}

export {
  mapDispatchToProps,
  mapStateToProps
}