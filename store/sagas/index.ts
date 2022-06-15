import {registerUserWatcher} from './registerSaga';
import {all} from 'redux-saga/effects';
import {signInWatcherSaga} from './signInSaga';
import {columnsWatcherSaga} from './columnsSaga';

export function* rootSaga() {
  yield all([registerUserWatcher(), signInWatcherSaga(), columnsWatcherSaga()]);
}
