const bcrypt = require("bcrypt");
const { EncodeToken } = require("../utility/tokenHelper");
const userModel = require("../models/userModel");
//! Create user
exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Create and save the new user
    user = await userModel.create({ email, password });
    res.status(200).json({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};

//! User Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
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

      let options = {
        maxAge: process.env.Cookie_Expire_Time,
        httpOnly: false,
        sameSite: "none",
        secure: true,
      };

      // Set cookie
      res.cookie("token", token, options);
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
  } catch (e) {
    res.status(200).json({
      success: false,
      error: e.toString(),
      message: "Something went wrong.",
    });
  }
};

//! get User
exports.admin = async (req, res) => {
  try {
    let email = req.headers.email;

    console.log(email);

    let MatchStage = {
      $match: {
        email,
      },
    };

    let project = {
      $project: {
        password: 0,
      },
    };
    let data = await userModel.aggregate([MatchStage, project]);
    res.status(200).json({ success: true, data: data[0] });
  } catch (e) {
    res.status(500).json({
      success: false,
      error: e.toString(),
      message: "Something went wrong.",
    });
  }
};

//! user Logout
exports.logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ success: true, message: "Logout success!" });
  } catch (e) {
    res.status(500).json({ success: false, error: e.toString() });
  }
};

//! update user
exports.update = async (req, res) => {
  try {
    console.log(req.headers._id, req.headers.email);

    const { email, password } = req.body;
    const userId = req.headers._id;

    let updatedData = { email };

    // যদি password ফিল্ড থাকে, তবে সেটি bcrypt দিয়ে হ্যাশ করে আপডেট করবো
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updatedData.password = hashedPassword;
    }

    // Update user
    const updatedUser = await userModel.findByIdAndUpdate(userId, updatedData, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      user: {
        email: updatedUser.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};

//! verifyAuth
exports.verifyAuth = async (req, res) => {
  try {
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Something went wrong.",
    });
  }
};
