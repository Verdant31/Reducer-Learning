import { useEffect, useState } from 'react'
import { api } from '../services/api';
import { Product } from '../store/modules/cart/types';
import CatalogItem from './CatalogItem';

export const Catalog = () => {
  const [ catalog, setCatalog ] = useState<Product[]>([])
  useEffect(() => {
    api.get('products').then(response => {
      setCatalog(response.data);
    })
  },[])
  
  return (
    <main>
      <h1>Catalog</h1>
      {catalog.map((product) => (
        <CatalogItem product={product} key={product.id} />
      ))}
    </main>
  )
}
//O useStore nos devolve a variavel que tem o acesso 
//a todo nosso store
//A função dispatch retornada pelo useDispatch é usada
//para podermos chamar as actions do nosso reducer, obrigando
//a chamada da função a passar pelo redux.