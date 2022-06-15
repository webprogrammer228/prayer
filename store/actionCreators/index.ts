import {actions} from '../actions/actions';
import {
  RegisterResponse,
  FormData,
  AuthResponse,
  AuthType,
  ColumnsInitialState,
} from '../../types/type';

export type signedUpActionType = ReturnType<typeof signedUp>;
export type signInSuccessActionType = ReturnType<typeof signInSuccess>;
export type getColumnsActionType = ReturnType<typeof getColumns>;

export const signedUp = (data: FormData) => {
  return {type: actions.USER_SIGNED_UP, payload: {...data}};
};

export const signUpSuccess = (successData: RegisterResponse) => {
  return {type: actions.USER_SIGNUP_SUCCESS, payload: {...successData}};
};

export const signUpFailed = (error: string) => {
  return {type: actions.USER_SIGNUP_FAILED, payload: {error}};
};

export const signIn = (data: AuthType) => {
  return {type: actions.USER_SIGN_IN, payload: {...data}};
};

export const signInSuccess = (successData: AuthResponse) => {
  return {type: actions.USER_SIGN_IN_SUCCESS, payload: {...successData}};
};

export const signInFailed = (error: string) => {
  return {type: actions.USER_SIGN_IN_FAILED, payload: {error}};
};

export const getColumns = () => {
  console.log('action');
  return {type: actions.GET_COLUMNS};
};

export const getColumnsSuccess = (data: ColumnsInitialState) => {
  return {type: actions.GET_COLUMNS_SUCCESS, payload: [...data]};
};

export const getColumnsFailed = (error: string) => {
  return {type: actions.GET_COLUMNS_FAILED, payload: {error}};
};
