const express = require("express");
const router = express.Router();

const AuthVerificationAdmin = require("../middlewares/AuthVerificationAdmin.js");

const adminController = require("../controllers/adminController.js");
const productController = require("../controllers/productController.js");
const categoryController = require("../controllers/categoryController.js");
const brandController = require("../controllers/brandController.js");

//! ============== For Super admin ==================
router.post("/admin-register", adminController.register);
router.post("/admin-login", adminController.login);
router.get("/admin", AuthVerificationAdmin, adminController.admin);
router.get("/admin-logout", AuthVerificationAdmin, adminController.logout);
router.put("/admin-update", AuthVerificationAdmin, adminController.update);

//! ============== For product ==================
router.post(
  "/create-product",
  AuthVerificationAdmin,
  productController.createProduct
);
router.get("/all-products/:per_page/:page_no", productController.allProduct);
router.get("/single-product/:id", productController.singleProduct);
router.put(
  "/update-product/:id",
  AuthVerificationAdmin,
  productController.updateProduct
);
router.delete(
  "/delete-product/:id",
  AuthVerificationAdmin,
  productController.deleteProduct
);

//! ============== For category ==================
router.post(
  "/create-category",
  AuthVerificationAdmin,
  categoryController.createCategory
);
router.get("/all-category/:per_page/:page_no", categoryController.allCategory);
router.get("/single-category/:id", categoryController.singleCategory);
router.put(
  "/update-category/:id",
  AuthVerificationAdmin,
  categoryController.updateCategory
);
router.delete(
  "/delete-category/:id",
  AuthVerificationAdmin,
  categoryController.deleteCategory
);

//! ============== For brands ==================
router.post(
  "/create-brand",
  AuthVerificationAdmin,
  brandController.createBrand
);
router.get("/all-category/:per_page/:page_no", categoryController.allCategory);
router.get("/single-category/:id", categoryController.singleCategory);
router.put(
  "/update-category/:id",
  AuthVerificationAdmin,
  categoryController.updateCategory
);
router.delete(
  "/delete-category/:id",
  AuthVerificationAdmin,
  categoryController.deleteCategory
);

module.exports = router;
