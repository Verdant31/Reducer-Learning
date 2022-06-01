import React, { useCallback } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { State } from '../store';
import { AddProductToCartRequest } from '../store/modules/cart/actions';
import { Product } from '../store/modules/cart/types'

interface CatalogItemProps { 
  product: Product;
}

const CatalogItem = ({product}: CatalogItemProps) => {
  const dispatch = useDispatch();
  const hasFailedStockCheck = useSelector<State, boolean>(state => {
    return state.cart.failedStockCheck.includes(product.id);
  })
  
  const handleAddProductToCart = useCallback(() => {
    dispatch(AddProductToCartRequest(product))
  }, [dispatch, product])

  return (
    <article>
      <strong>{product.title}</strong> {" - "}
      <span>{product.price}</span> {" "}
      
      <button 
        onClick={() => handleAddProductToCart()} 
        type="button"
        >
          Comprar
      </button>
      {hasFailedStockCheck && <span style={{color: 'red'}}>Falta de estoque</span>}
    </article>
  )
}

export default CatalogItem