const express = require("express");
const router = express.Router();

const AuthVerificationAdmin = require("../middlewares/AuthVerificationAdmin.js");

const adminController = require("../controllers/adminController.js");
const productController = require("../controllers/productController.js");

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

module.exports = router;
