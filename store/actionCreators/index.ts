import {actions} from '../actions/actions';
import {
  RegisterResponse,
  FormData,
  AuthResponse,
  AuthType,
  ColumnsInitialState,
  Column,
} from '../../types/type';

export type ActionsTypes = getColumnsActionType | createColumnsActionType;

export type signedUpActionType = ReturnType<typeof signedUp>;
export type signInSuccessActionType = ReturnType<typeof signInSuccess>;
export type getColumnsActionType = ReturnType<typeof getColumns>;
export type createColumnsActionType =
  | ReturnType<typeof createColumn>
  | ReturnType<typeof createColumnSuccess>
  | ReturnType<typeof createColumnFailed>;

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
  return {type: actions.GET_COLUMNS};
};

export const getColumnsSuccess = (data: ColumnsInitialState) => {
  return {type: actions.GET_COLUMNS_SUCCESS, payload: [...data]};
};

export const getColumnsFailed = (error: string) => {
  return {type: actions.GET_COLUMNS_FAILED, payload: {error}};
};

export const createColumn = (data: Column) => {
  console.log('payload from action creator', data);
  return {type: actions.CREATE_COLUMN, payload: data};
};

export const createColumnSuccess = (data: Column) => {
  return {type: actions.CREATE_COLUMN_SUCCESS, payload: {...data}};
};

export const createColumnFailed = (error: string) => {
  return {type: actions.CREATE_COLUMN_FAILED, payload: {error}};
};
