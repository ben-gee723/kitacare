const bcrypt = require("bcrypt");

//create hash password
exports.encrypt = psw => {
  if (!psw) return "";
  let hashedPassword = bcrypt.hashSync(password, 8);
  return hashedPassword;
};
//compare the password with the one stored in the data base(hash password)
exports.compare = (psw, hashedpassword) => {
  let validPassword = bcrypt.compareSync(psw, hashedpassword);
  return validPassword;
};
