import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {authMiddleware} from './authMiddleware';
import {signUpReducer} from './reducers/signUpReducer';
import {rootSaga} from './sagas';

const rootReducer = combineReducers({
  registerUser: signUpReducer,
});

const composeEnhancers =
  // @ts-ignore
  (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(authMiddleware)),
);

authMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
