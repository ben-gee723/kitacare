const bcrypt = require("bcrypt");

//create hash password
exports.encrypt = password => {
  if (!password) return "";
  let hashedPassword = bcrypt.hashSync(password, 8);
  return hashedPassword;
};
//compare the password with the one stored in the data base(hash password)
exports.compare = (password, hashedpassword) => {
  let validPassword = bcrypt.compareSync(password, hashedpassword);
  return validPassword;
};
