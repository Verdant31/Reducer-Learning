import { Reducer } from "redux";
import { CartState } from "./types";

const INITIAL_STATE: CartState = {
  items: []
}
const Cart: Reducer<CartState> = () => {
  return INITIAL_STATE;
}
export default Cart;
//Arquivo destinado para a criação do reducer do carrinho