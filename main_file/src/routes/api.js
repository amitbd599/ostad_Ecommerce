const express = require("express");
const router = express.Router();

const authVerificationAdmin = require("../middlewares/authVerificationAdmin.js");
const authVerificationUser = require("../middlewares/authVerificationUser.js");
const fileUploads = require("../middlewares/fileUpload.js");

const adminController = require("../controllers/adminController.js");
const userController = require("../controllers/userController.js");
const productController = require("../controllers/productController.js");
const categoryController = require("../controllers/categoryController.js");
const brandController = require("../controllers/brandController.js");
const reviewController = require("../controllers/reviewController.js");
const cartController = require("../controllers/cartController.js");
const invoiceController = require("../controllers/invoiceController.js");
const fileController = require("../controllers/fileController.js");

//! ============== For Super admin ==================
router.post("/admin-register", adminController.register);
router.post("/admin-login", adminController.login);
router.get("/admin", authVerificationAdmin, adminController.admin);
router.get("/admin-logout", authVerificationAdmin, adminController.logout);
router.put("/admin-update", authVerificationAdmin, adminController.update);

//! ============== For user ==================
router.post("/user-register", userController.register);
router.post("/user-login", userController.login);
router.get("/user", authVerificationUser, userController.admin);
router.get("/user-logout", authVerificationUser, userController.logout);
router.put("/user-update", authVerificationUser, userController.update);

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
router.put(
  "/update-review/:id",
  authVerificationUser,
  reviewController.updateReview
);
router.delete(
  "/delete-review/:id",
  authVerificationUser,
  reviewController.deleteReview
);

//! ============== For cart ==================
router.post("/create-cart", authVerificationUser, cartController.createCart);
router.get(
  "/read-cart/:cart_id",
  authVerificationUser,
  cartController.readCart
);
// router.put(
//   "/update-cart/:cart_id",
//   authVerificationUser,
//   cartController.updateCart
// );
router.delete(
  "/delete-cart/:cart_id",
  authVerificationUser,
  cartController.deleteCart
);

//! ============== For Invoice & Payment ==================
router.post(
  "/create-invoice",
  authVerificationUser,
  invoiceController.createInvoice
);
router.get(
  "/read-all-invoice-single-user",
  authVerificationUser,
  invoiceController.readAllInvoiceSingleUser
);
router.get(
  "/read-all-invoice-all-user",
  authVerificationAdmin,
  invoiceController.readAllInvoiceAllUser
);

router.get(
  "/read-single-invoice-single-user/:invoice_id",
  authVerificationUser,
  invoiceController.readSingleInvoiceSingleUser
);

router.get(
  "/read-invoice-product-list-single-user/:invoice_id",
  authVerificationUser,
  invoiceController.readInvoiceProductListSingleUser
);
router.get(
  "/order-list",
  authVerificationUser,
  invoiceController.readOrderList
);
router.get(
  "/all-order-list",
  authVerificationAdmin,
  invoiceController.allOrderList
);

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
