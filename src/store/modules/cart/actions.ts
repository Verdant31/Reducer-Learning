import { ActionTypes, Product } from "./types";

export const AddProductToCartRequest = (product: Product) => {
  return {
    type: ActionTypes.addProductToCartRequest,
    payload: {
      product
    }
  }
}
export const AddProductToCartSuccess = (product: Product) => {
  return {
    type: ActionTypes.addProductToCartSuccess,
    payload: {
      product
    }
  }
}
export const AddProductToCartFailure = (productId: number) => {
  return {
    type: ActionTypes.addProductToCartFailure,
    payload: {
      productId
    }
  }
}

//Arquivo destinado a todas as ações que podem ocorrer
//com o modulo de carrinho.
//Exemplo: adicionar, remover e editar produtos