const increaseAction = { type: 'increase' };
const decreaseAction = { type: 'decrease' };
const findRandoPersonAction = { type: 'findRandoPerson'}

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    CountValue: state.count,
    RandoPerson: state.rando
  }
}

function mapDispatchToProps(dispatch){
  return {
    onIncreaseClick: ()=>dispatch(increaseAction),
    onDecreaseClick: ()=>dispatch(decreaseAction),
    onFindRandoPersonClick: ()=>{dispatch(findRandoPersonAction)}
  }
}

export {
  mapDispatchToProps,
  mapStateToProps,
}