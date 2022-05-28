import { Product } from "./types";

const AddProductToCart = (product: Product) => {
  return {
    type: 'ADD_PRODUCT_TO_CART',
    payload: {
      product
    }
  }
}
export default AddProductToCart;
//Arquivo destinado a todas as ações que podem ocorrer
//com o modulo de carrinho.
//Exemplo: adicionar, remover e editar produtos