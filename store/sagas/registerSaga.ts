import {put, call, takeLatest} from 'redux-saga/effects';
import {registerApi} from '../../api/registerApi';
import {
  signedUpActionType,
  signUpFailed,
  signUpSuccess,
} from '../actionCreators';
import {RegisterResponse, RegisterResponseError} from '../../types/type';
import {actions} from '../actions/actions';
import {storeData} from '../../helpers';
import {AxiosResponse} from 'axios';

export function* registerUserWatcher() {
  yield takeLatest(actions.USER_SIGNED_UP, registerUser);
}

export function* registerUser({payload}: signedUpActionType) {
  try {
    const response: AxiosResponse<RegisterResponse> &
      AxiosResponse<RegisterResponseError> = yield call(registerApi, {
      ...payload,
    });
    if (!response.data.message) {
      yield put(signUpSuccess(response.data));
      storeData(response.data.token).then(token => token);
      console.log('response data', response.data);
    } else {
      yield put(signUpFailed(response.data.message));
    }
  } catch (e: any) {
    yield put(signUpFailed(e));
    console.log('error', e);
  }
}
