import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {authMiddleware} from './authMiddleware';
import {userReducer} from './reducers/userReducer';
import rootSaga from './sagas/rootSaga';

const rootReducer = combineReducers({
  users: userReducer,
});

const composeEnhancers =
  (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(authMiddleware)),
);

authMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
