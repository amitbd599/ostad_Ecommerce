const bcrypt = require("bcrypt");
const { EncodeToken } = require("../utility/tokenHelper");
const userModel = require("../models/userModel");
//! Create user
exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;

    // find the existing user

    let ifUser = await userModel.find({ email });
    if (ifUser.length > 0) {
      return res.status(200).json({
        success: false,
        message: "Email already registered.",
      });
    }

    // Create and save the new user
    user = await userModel.create({ email, password });
    res.status(200).json({
      success: true,
      message: "Registration successfully.",
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
    let email = req.headers.email;
    const {
      password,
      image,
      cus_add,
      cus_city,
      cus_country,
      cus_fax,
      cus_name,
      cus_phone,
      cus_postcode,
      cus_state,
      ship_add,
      ship_city,
      ship_country,
      ship_name,
      ship_phone,
      ship_postcode,
      ship_state,
    } = req.body;
    const _id = req.headers._id;

    let updatedData = {
      email,
      password,
      image,
      cus_add,
      cus_city,
      cus_country,
      cus_fax,
      cus_name,
      cus_phone,
      cus_postcode,
      cus_state,
      ship_add,
      ship_city,
      ship_country,
      ship_name,
      ship_phone,
      ship_postcode,
      ship_state,
    };

    // যদি password ফিল্ড থাকে, তবে সেটি bcrypt দিয়ে হ্যাশ করে আপডেট করবো
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updatedData.password = hashedPassword;
    }

    // isMatch password
    const isMatch = await bcrypt.compare(password, updatedData.password);

    if (isMatch) {
      let token = EncodeToken(email, _id.toString());

      // Update user
      const user = await userModel.findByIdAndUpdate(_id, updatedData, {
        new: true,
      });

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
        message: "Update data successful",
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
