import './App.css';
import Product from './Components/TanStackQuery/ApiCrud';
import ProductDetails from './Components/TanStackQuery/ApiCrud/productDetails';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <>
    {/* <Product/> */}
    <Routes>
      <Route path='/product' element={<Product/>}/>
      <Route path='/productDetails/:id' element={<ProductDetails/>}/>

    </Routes>
     
    </>
  );
}

export default App;
