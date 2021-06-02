import { createStore } from 'redux';

const loginReducer = (
  state = { email: null, password: null, jwtToken: null },
  action
) => {
  switch (action.type) {
    case 'userLogin':
      return {
        email: action.email,
        password: action.password,
        jwtToken: action.jwtToken,
      };
    default:
      return state;
  }
};

const store = createStore(loginReducer);

export default store;
