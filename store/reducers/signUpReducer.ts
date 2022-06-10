import {UserInitialState} from '../../types/type';
import {actions} from '../actions/actions';

const initialState: UserInitialState = {
  data: {
    name: '',
    email: '',
    password: '',
  },
  isLoading: false,
  error: null,
};

export const signUpReducer = (
  state = initialState,
  action: {type: string; payload: any},
) => {
  console.log('action from reducer', action);
  switch (action.type) {
    case actions.USER_SIGNUP: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case actions.USER_SIGNUP_SUCCESS: {
      console.log(action.payload);
      return {
        ...state,
        data: {...action.payload},
        isLoading: false,
      };
    }
    case actions.USER_SIGNUP_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    case actions.USER_SIGNED_UP: {
      const {name, email, password} = action.payload;

      return {
        ...state,
        isLoading: false,
        data: {
          name: name,
          email: email,
          password: password,
        },
      };
    }
    default:
      return state;
  }
};
