import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { rootReducer } from './reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/rootSaga';

const client = axios.create({
  baseURL: 'https://51c5-188-163-104-2.ngrok-free.app/',
  responseType: 'json',
});

export const makeStore = () => {
  const sagaMiddleWare = createSagaMiddleware();

  const store: any = createStore(
    rootReducer,
    applyMiddleware(axiosMiddleware(client), sagaMiddleWare),
  );

  store.sagaTask = sagaMiddleWare.run(rootSaga);
  return store;
};

export const store = makeStore();
