import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteScrollToTop from "./helper/RouteScrollToTop";
import ScrollToTop from "react-scroll-to-top";
import LoginPage from "./pages/LoginPage";
import DashboardProfilePage from "./pages/DashboardProfilePage";
import CreateProductPage from "./pages/CreateProductPage";
import UpdateProductPage from "./pages/UpdateProductPage";
import AllProductPage from "./pages/AllProductPage";
import CategoryPage from "./pages/CategoryPage";
import BrandPage from "./pages/BrandPage";
import AllOrdersPage from "./pages/AllOrdersPage";

function App() {
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <ScrollToTop smooth color='#A847F0' />
      <Routes>
        <Route exact path='/login' element={<LoginPage />} />

        {/* dashboard */}
        <Route exact path='/admin-profile' element={<DashboardProfilePage />} />
        <Route exact path='/create-product' element={<CreateProductPage />} />
   
        <Route exact path='/all-product' element={<AllProductPage />} />
        <Route exact path='/category' element={<CategoryPage />} />
        <Route exact path='/brand' element={<BrandPage />} />
        <Route exact path='/all-orders' element={<AllOrdersPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
