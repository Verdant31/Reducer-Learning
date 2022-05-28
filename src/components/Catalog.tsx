import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { api } from '../services/api';
import { Product } from '../store/modules/cart/types';

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
        <article key={product.id}>
          <strong>{product.title}</strong> {" - "}
          <span>{product.price}</span> {" "}
          
          <button type="button">Comprar</button>
        </article>
      ))}
    </main>
  )
}
//O useStore nos devolve a variavel que tem o acesso 
//a todo nosso store
