import { USER_SIGNUP_DATA } from '../actions/types';

export default function dataReducer(state = [], action) {
  switch (action.type) {
    case USER_SIGNUP_DATA:
      return [...state, action.payload];
    default:
      return state;
  }
}
