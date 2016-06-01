// state is not app state, it is the state
// reducer is responsible for

export default function(state = null, action) { //set default to null
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload
  }
  return state
}
