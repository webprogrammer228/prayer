import {registerUser} from './registerSaga';
import {all} from 'redux-saga/effects';

export function* rootSaga() {
  yield all([registerUser()]);
}
