import {call, put, takeLatest} from 'redux-saga/effects';

import {
  getColumns,
  getColumnsFailed,
  getColumnsSuccess,
} from '../actionCreators';
import {ColumnsInitialState} from '../../types/type';
import {getColumnsApi} from '../../api/columns';
import {actions} from '../actions/actions';

export function* columnGetSaga() {
  try {
    // @ts-ignore
    console.log('saga');
    const response: ColumnsInitialState = yield call(getColumnsApi);
    console.log('response', response);
    yield put(getColumnsSuccess(response));
    console.log('response data', response);
  } catch (e: any) {
    yield put(getColumnsFailed(e));
    console.log('error', e);
  }
}

export function* columnsWatcherSaga() {
  // @ts-ignore
  yield takeLatest(actions.GET_COLUMNS, columnGetSaga);
}
