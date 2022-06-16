import {ColumnsInitialState} from '../../types/type';
import {actions} from '../actions/actions';
import {ActionsTypes} from '../actionCreators';

const initialState: ColumnsInitialState = [];

export const columnsReducer = (
  state = initialState,
  action: {type: string; payload: ActionsTypes},
) => {
  switch (action.type) {
    case actions.GET_COLUMNS: {
      return {
        ...state,
      };
    }
    case actions.GET_COLUMNS_SUCCESS: {
      return {
        // @ts-ignore
        state: [...action.payload],
      };
    }
    case actions.GET_COLUMNS_FAILED: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case actions.CREATE_COLUMN: {
      return {
        ...state,
      };
    }
    case actions.CREATE_COLUMN_SUCCESS: {
      return {
        // @ts-ignore
        state: [...state.state, action.payload],
      };
    }
    case actions.CREATE_COLUMN_FAILED: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
