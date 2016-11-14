// Reducers always get a 'state', and an 'action'.
// 'state' is not the application state, only the state that this reducer is responsive for.
export default function(state = null, action) {

  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
      break;
  }
  // Return the new state.
  return state;
};