import {RegisterResponse, UserInitialState} from '../../types/type';
import {actions} from '../actions/actions';

const initialState: UserInitialState = {
  name: '',
  email: '',
  password: '',
  error: null,
};

export const userReducer = (
  state = initialState,
  action: {type: string; payload: RegisterResponse},
) => {
  switch (action.type) {
    case actions.USER_SIGNUP_SUCCESS: {
      return {
        state: {...action.payload},
      };
    }
    case actions.USER_SIGNUP_FAILED: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
