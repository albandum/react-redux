export default (state = null, action) => { // Always provide a default state so it's not undefined
  switch (action.type) {
    case 'select_library':
      return action.payload; //Return the id we clicked on
    default:
      return state;
  }
};
