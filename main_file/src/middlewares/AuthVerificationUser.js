const { DecodeToken } = require("../utility/TokenHelper");

module.exports = async (req, res, next) => {
  let token = await req?.cookies?.token;
  let decoded = DecodeToken(token);
  if (decoded === null) {
    return res.status(401).json({
      status: 401,
      message: "Invalid token",
    });
  } else {
    let email = decoded["email"];
    let user_id = decoded["user_id"];
    req.headers.email = email;
    req.headers.user_id = user_id;
    next();
  }
};
