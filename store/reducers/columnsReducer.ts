import {ColumnsInitialState} from '../../types/type';
import {actions} from '../actions/actions';

const initialState: ColumnsInitialState = [];

export const columnsReducer = (
  state = initialState,
  action: {type: string; payload: any},
) => {
  switch (action.type) {
    case actions.GET_COLUMNS: {
      return {
        ...state,
      };
    }
    case actions.GET_COLUMNS_SUCCESS: {
      return {
        state: [...action.payload],
      };
    }
    case actions.GET_COLUMNS_FAILED: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
