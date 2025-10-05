const express = require("express");
const router = express.Router();

const authVerificationAdmin = require("../middlewares/authVerificationAdmin.js");

const adminController = require("../controllers/adminController.js");
const productController = require("../controllers/productController.js");
const categoryController = require("../controllers/categoryController.js");
const brandController = require("../controllers/brandController.js");

//! ============== For Super admin ==================
router.post("/admin-register", adminController.register);
router.post("/admin-login", adminController.login);
router.get("/admin", authVerificationAdmin, adminController.admin);
router.get("/admin-logout", authVerificationAdmin, adminController.logout);
router.put("/admin-update", authVerificationAdmin, adminController.update);

//! ============== For product ==================
router.post(
  "/create-product",
  authVerificationAdmin,
  productController.createProduct
);
router.get("/all-products/:per_page/:page_no", productController.allProduct);
router.get("/single-product/:id", productController.singleProduct);
router.put(
  "/update-product/:id",
  authVerificationAdmin,
  productController.updateProduct
);
router.delete(
  "/delete-product/:id",
  authVerificationAdmin,
  productController.deleteProduct
);

//! ============== For category ==================
router.post(
  "/create-category",
  authVerificationAdmin,
  categoryController.createCategory
);
router.get("/all-category/:per_page/:page_no", categoryController.allCategory);
router.get("/single-category/:id", categoryController.singleCategory);
router.put(
  "/update-category/:id",
  authVerificationAdmin,
  categoryController.updateCategory
);
router.delete(
  "/delete-category/:id",
  authVerificationAdmin,
  categoryController.deleteCategory
);

//! ============== For brands ==================
router.post(
  "/create-brand",
  authVerificationAdmin,
  brandController.createBrand
);
router.get("/all-brand/:per_page/:page_no", brandController.allBrand);
router.get("/single-category/:id", categoryController.singleCategory);
router.put(
  "/update-category/:id",
  authVerificationAdmin,
  categoryController.updateCategory
);
router.delete(
  "/delete-category/:id",
  authVerificationAdmin,
  categoryController.deleteCategory
);

module.exports = router;
