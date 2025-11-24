const adminModel = require("../models/adminModel");
const { EncodeToken } = require("../utility/tokenHelper");
const bcrypt = require("bcrypt");

let options = {
  maxAge: process.env.Cookie_Expire_Time,
  httpOnly: false,
  sameSite: "none",
  secure: true,
};

//! Create admin
exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;

    await adminModel.create({ email, password });

    res.status(200).json({
      success: true,
      message: "Admin created successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await adminModel.findOne({ email });
    if (!user)
      return res
        .status(200)
        .json({ success: false, message: "Invalid email or password" });

    // isMatch password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return res
        .status(200)
        .json({ success: false, message: "Invalid email or password" });

    if (isMatch) {
      let token = EncodeToken(user.email, user._id.toString());

      // Set cookie
      res.cookie("a__token", token, options);

      res.status(200).json({
        success: true,
        message: "Login successful",
        user: {
          id: user._id,
          email: user.email,
        },
        token: token,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};
