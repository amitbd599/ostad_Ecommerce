import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteScrollToTop from "./helper/RouteScrollToTop";
import ScrollToTop from "react-scroll-to-top";
import LoginPage from "./pages/LoginPage";
import DashboardProfilePage from "./pages/DashboardProfilePage";
import CreateProductPage from "./pages/CreateProductPage";
import AllProductPage from "./pages/AllProductPage";
import CategoryPage from "./pages/CategoryPage";
import BrandPage from "./pages/BrandPage";
import AllOrdersPage from "./pages/AllOrdersPage";
import AllReviewPage from "./pages/AllReviewPage";
import FileManagerPage from "./pages/FileManagerPage";
import PrivateRoute from "./layout/PrivateRoute";

function App() {
  return (
    <BrowserRouter basename='/super-admin'>
      <RouteScrollToTop />
      <ScrollToTop smooth color='#A847F0' />
      <Routes>
        {/* dashboard */}
        <Route
          exact
          path='/'
          element={
            <PrivateRoute>
              <DashboardProfilePage />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/create-product'
          element={
            <PrivateRoute>
              <CreateProductPage />
            </PrivateRoute>
          }
        />

        <Route exact path='/all-product' element={<AllProductPage />} />
        <Route exact path='/all-reviews' element={<AllReviewPage />} />
        <Route exact path='/category' element={<CategoryPage />} />
        <Route exact path='/brand' element={<BrandPage />} />
        <Route exact path='/all-orders' element={<AllOrdersPage />} />
        <Route exact path='/file-manager' element={<FileManagerPage />} />

        <Route exact path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
