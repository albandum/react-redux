import { EMAIL_CHANGED, PASSWORD_CHANGED } from '../actions/types';

const INIT = {
  email: '',
  password: '',
  loading: false,
  error: '',
  user: null
}; // Make sure we always have an initial state

export default (state = INIT, action) => {
  switch (action.type) {
      case EMAIL_CHANGED:
        // Can't do return state.email = action.payload because we need to change the object
        // For react to dispatch the action. That's what this ... syntax is for.
        return { ...state, email: action.payload };
      case PASSWORD_CHANGED:
        return { ...state, password: action.payload };
      default:
        return state;
  }
};
