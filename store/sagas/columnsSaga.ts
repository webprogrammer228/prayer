import {call, put, takeLatest} from 'redux-saga/effects';

import {
  createColumnFailed,
  createColumnsActionType,
  createColumnSuccess,
  getColumnsFailed,
  getColumnsSuccess,
} from '../actionCreators';
import {ColumnResponse, ColumnsInitialState} from '../../types/type';
import {createColumnApi, getColumnsApi} from '../../api/columns';
import {actions} from '../actions/actions';

export function* columnGetSaga() {
  try {
    const response: ColumnsInitialState = yield call(getColumnsApi);
    yield put(getColumnsSuccess(response));
    console.log('response data', response);
  } catch (e: any) {
    yield put(getColumnsFailed(e));
    console.log('error', e);
  }
}

export function* createColumnSaga({payload}: createColumnsActionType) {
  console.log('payload from saga', payload);
  try {
    // @ts-ignore
    const response: ColumnResponse = yield call(createColumnApi, payload);
    console.log('response data create column', response);
    yield put(createColumnSuccess(response));
  } catch (e: any) {
    yield put(createColumnFailed(e));
    console.log('error', e);
  }
}

export function* columnsWatcherSaga() {
  yield takeLatest(actions.GET_COLUMNS, columnGetSaga);
  yield takeLatest(actions.CREATE_COLUMN, createColumnSaga);
}
