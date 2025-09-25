import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RouteScrollToTop from "./helper/RouteScrollToTop";
import ScrollToTop from "react-scroll-to-top";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import AllProductPage from "./pages/AllProductPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import CartPersonalPage from "./pages/CartPersonalPage";

function App() {
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <ScrollToTop smooth color='#A847F0' />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/all-product' element={<AllProductPage />} />
        <Route exact path='/product-details' element={<ProductDetailsPage />} />
        <Route exact path='/cart' element={<CartPage />} />
        <Route exact path='/cart-personal' element={<CartPersonalPage />} />

        <Route exact path='/register' element={<RegisterPage />} />
        <Route exact path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
