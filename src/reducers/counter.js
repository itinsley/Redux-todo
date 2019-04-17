
const randos =[
  { name: "Tom" },
  { name: 'Dick' },
  { name: 'Harry' }
]

function findRando() { 
  const r = Math.floor(Math.random() * (randos.length))
  return  randos[r]
};

const defaultState = { 
  count: 0, 
  rando: { name:''} 
}

// Reducer
function counter(state = defaultState, action) {
  const count = state.count
  switch (action.type) {
    case 'increase':
      return { ...state, count: count + 1 }
    case 'decrease':
      return { ...state, count: count - 1 }
    case 'findRandoPerson':
      return { ...state, rando: findRando()}
    default:
      return state
  }
}

export default counter;