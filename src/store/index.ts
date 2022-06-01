//Arquivo responsavel por criar o store da aplicação
import { configureStore } from '@reduxjs/toolkit'
import { CartState } from './modules/cart/types';
import rootReducer from './modules/rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './modules/rootSaga';

export interface State {
  cart: CartState;
}

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: [...middlewares]
})

sagaMiddleware.run(rootSaga);

export default store;