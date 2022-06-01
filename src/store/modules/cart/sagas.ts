import { AxiosResponse } from 'axios';
import { all, takeLatest, select, call, put} from 'redux-saga/effects';
import { State } from '../..';
import { api } from '../../../services/api';
import {AddProductToCartFailure, AddProductToCartRequest, AddProductToCartSuccess} from './actions';
import { ActionTypes } from './types';

type CheckProductStockRequest = ReturnType<typeof AddProductToCartRequest>;
interface StockResponse { 
  id: number;
  quantity: number;
}
function* checkProductStock({payload}: CheckProductStockRequest) {
  const { product } = payload;
  const currentQuantity: number = yield select((state: State)=>{
    //Verifica se ja existe esse produto no carrinho
    //Se existe, retorna a quantidade, se não, retorna 0
    return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0;
  })
  const availableStockResponse: AxiosResponse<StockResponse> = yield call(api.get,`stock/${product.id}`)
  if(availableStockResponse.data.quantity > currentQuantity) {
    yield put(AddProductToCartSuccess(product))
  }else {
    yield put(AddProductToCartFailure(product.id))
  }
}

export default all([
  takeLatest(ActionTypes.addProductToCartRequest, checkProductStock)
])