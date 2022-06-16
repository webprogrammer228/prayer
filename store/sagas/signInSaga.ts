import {call, put, takeLatest} from 'redux-saga/effects';
import {actions} from '../actions/actions';
import {
  signInFailed,
  signInSuccess,
  signInSuccessActionType,
} from '../actionCreators';
import {AxiosResponse} from 'axios';
import {storeData} from '../../helpers';
import {signInApi} from '../../api/signInApi';
import {AuthError, AuthResponse} from '../../types/type';

export function* signInWatcherSaga() {
  yield takeLatest(actions.USER_SIGN_IN, signInSaga);
}

export function* signInSaga({payload}: signInSuccessActionType) {
  try {
    const response: AxiosResponse<AuthResponse, string> &
      // @ts-ignore
      AxiosResponse<AuthError, string> = yield call(signInApi, {
      ...payload,
    });
    if (!response.data.message) {
      yield put(signInSuccess(response.data));
      storeData(response.data.token).then(token => token);

      console.log('response data', response.data);
    } else {
      yield put(signInFailed(response.data.message));
    }
  } catch (e: any) {
    yield put(signInFailed(e));
    console.log('error', e);
  }
}
