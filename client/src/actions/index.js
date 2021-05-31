import { USER_SIGNUP_DATA } from './types';

export const signupData = data => {
  return async dispatch => {
    try {
      console.log(data);
      dispatch({
        type: USER_SIGNUP_DATA,
        payload: data,
      });
    } catch (error) {
      throw error;
    }
  };
};
