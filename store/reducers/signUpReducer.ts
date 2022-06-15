import {UserInitialState} from '../../types/type';
import {actions} from '../actions/actions';

const initialState: UserInitialState = {
  data: {
    name: '',
    email: '',
    password: '',
  },
  isLoading: false,
  isAuth: false,
  error: null,
};

export const signUpReducer = (
  state = initialState,
  action: {type: string; payload: any},
) => {
  switch (action.type) {
    case actions.USER_SIGNUP: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case actions.USER_SIGNUP_SUCCESS: {
      return {
        ...state,
        data: {...action.payload},
        isLoading: false,
      };
    }
    case actions.USER_SIGNUP_FAILED: {
      const {error} = action.payload;
      return {
        ...state,
        isLoading: false,
        error: error,
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
    case actions.USER_SIGN_IN:
      return {
        ...state,
        isLoading: true,
      };
    case actions.USER_SIGN_IN_SUCCESS: {
      const {email, password} = action.payload;
      return {
        ...state,
        data: {
          email: email,
          password: password,
        },
        isLoading: false,
        isAuth: true,
      };
    }
    case actions.USER_SIGN_IN_FAILED: {
      const {error} = action.payload;
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        error: error,
      };
    }

    default:
      return state;
  }
};
