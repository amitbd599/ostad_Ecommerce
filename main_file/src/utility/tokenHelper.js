const jwt = require("jsonwebtoken");

exports.EncodeToken = (email, _id) => {
  console.log(email, _id);

  let key = process.env.JWT_KEY;
  let expire = process.env.JWT_Expire_Time;
  let payload = { email, _id };
  return jwt.sign(payload, key, { expiresIn: expire });
};
exports.DecodeToken = (token) => {
  try {
    let key = process.env.JWT_KEY;
    let decoded = jwt.verify(token, key);
    return decoded;
  } catch (err) {
    return null;
  }
};
