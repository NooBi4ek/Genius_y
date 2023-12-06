import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { rootReducer } from './reducers/rootReducer';

const client = axios.create({
  baseURL: 'https://62efc8cd57311485d12837b1.mockapi.io/',
  responseType: 'json',
});

export const store = createStore(
  rootReducer,
  applyMiddleware(axiosMiddleware(client)),
);
