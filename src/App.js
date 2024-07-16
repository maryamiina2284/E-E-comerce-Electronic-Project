import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Header from './components/Header';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <Router>
      <Header />
      <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;
