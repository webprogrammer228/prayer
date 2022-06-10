import {put, call, takeEvery} from 'redux-saga/effects';
import {registerApi} from '../../api/registerApi';
import {signUpFailed, signUpSuccess} from '../actionCreators';
import {RegisterResponse, FormData} from '../../types/type';
import {AxiosResponse} from 'axios';

// приходит и тип и payload, поэтому в параметре функции нужно деструктурировать и типизировать
export function* registerUser(payload?: {
  name: string;
  email: string;
  password: string;
}) {
  console.log('Start saga');
  console.log('payload', payload);
  try {
    const response: AxiosResponse<RegisterResponse> = yield call(
      registerApi,
      payload,
    );
    yield put(signUpSuccess(response.data));
    console.log('response data', response);
  } catch (e: any) {
    yield put(signUpFailed(e));
    console.log('error', e);
  }
}
