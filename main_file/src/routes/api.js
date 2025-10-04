const express = require("express");
const router = express.Router();

const AuthVerificationAdmin = require("../middlewares/AuthVerificationAdmin.js");
const adminController = require("../controllers/adminController.js");

//! ============== For Super admin ==================
router.post("/admin-register", adminController.register);
router.post("/admin-login", adminController.login);
router.get("/admin", AuthVerificationAdmin, adminController.admin);

module.exports = router;
