import {actions} from '../actions/actions';
import {RegisterResponse, FormData} from '../../types/type';
import {AxiosError} from 'axios';

export const signedUp = (data: FormData) => {
  return {type: actions.USER_SIGNED_UP, payload: {...data}};
};

export const signUp = () => {
  return {type: actions.USER_SIGNUP};
};

export const signUpSuccess = (successData: RegisterResponse) => {
  return {type: actions.USER_SIGNUP_SUCCESS, payload: {...successData}};
};

export const signUpFailed = (error: AxiosError) => {
  return {type: actions.USER_SIGNUP_FAILED, payload: {...error}};
};
