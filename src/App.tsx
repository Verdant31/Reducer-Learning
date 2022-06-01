import { Catalog } from './components/Catalog';
import { Provider } from 'react-redux'
import store from './store';
import Cart from './components/Cart';

function App() {
  return (
    <Provider store={store}>
      <Catalog />
      <Cart />
    </Provider>
  )
}
export default App;
//O provider irá prover os valores contidos dentro
//do contexto para a aplicação