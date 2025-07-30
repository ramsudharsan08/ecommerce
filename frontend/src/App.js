import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetial from './pages/ProductDetial';
import { useState } from 'react';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Cart from './pages/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <div className='App'>
      <Router>
        <ToastContainer theme='dark' position='bottom-center'/>
        <Header cartItems={cartItems}/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/search' element={<Home/>}></Route>
              <Route path='/product/:id' element={< ProductDetial cartItems={cartItems} setCartItems={setCartItems}/>}></Route>
              <Route path='/cart' element={< Cart cartItems={cartItems} setCartItems={setCartItems}/>}></Route>
          </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
