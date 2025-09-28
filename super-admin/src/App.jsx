import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteScrollToTop from "./helper/RouteScrollToTop";
import ScrollToTop from "react-scroll-to-top";
import LoginPage from "./pages/LoginPage";
import DashboardProfilePage from "./pages/DashboardProfilePage";
import CreateProductPage from "./pages/CreateProductPage";
import UpdateProductPage from "./pages/UpdateProductPage";
import AllProductPage from "./pages/AllProductPage";

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
        <Route exact path='/update-product' element={<UpdateProductPage />} />
        <Route exact path='/all-product' element={<AllProductPage />} />
        <Route exact path='/all-product' element={<AllProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
