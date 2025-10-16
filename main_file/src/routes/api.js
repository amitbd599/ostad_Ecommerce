const express = require("express");
const router = express.Router();

const authVerificationAdmin = require("../middlewares/authVerificationAdmin.js");
const authVerificationUser = require("../middlewares/authVerificationUser.js");
const fileUploads = require("../middlewares/fileUpload.js");

const adminController = require("../controllers/adminController.js");
const productController = require("../controllers/productController.js");
const categoryController = require("../controllers/categoryController.js");
const brandController = require("../controllers/brandController.js");
const reviewController = require("../controllers/reviewController.js");
const fileController = require("../controllers/fileController.js");

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
router.get(
  "/all-products/:category_id/:brand_id/:remark/:keyword/:per_page/:page_no",
  productController.allProduct
);
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
router.get("/single-brand/:id", brandController.singleBrand);
router.put(
  "/update-brand/:id",
  authVerificationAdmin,
  brandController.updateBrand
);
router.delete(
  "/delete-brand/:id",
  authVerificationAdmin,
  brandController.deleteBrand
);

//! ============== For review ==================
router.post(
  "/create-review",
  authVerificationUser,
  reviewController.createReview
);
router.get("/all-review/:per_page/:page_no", reviewController.allReview);
router.get("/single-review/:id", reviewController.singleReview);
// router.put(
//   "/update-brand/:id",
//   authVerificationAdmin,
//   brandController.updateBrand
// );
// router.delete(
//   "/delete-brand/:id",
//   authVerificationAdmin,
//   brandController.deleteBrand
// );

// ! File Uploads
router.post(
  "/file-upload",
  authVerificationAdmin,
  fileUploads.single("file"),
  fileController.fileUpload
);
router.delete("/file-remove", authVerificationAdmin, fileController.fileRemove);
router.get("/all-file/:per_page/:page_no", fileController.allFile);

module.exports = router;
