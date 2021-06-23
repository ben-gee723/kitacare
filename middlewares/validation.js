const {validationResult} = require("express-validator")

const Validation = (rules) => {
  return [
    ...rules,
    //custom middleware
    (req, res, next) => {
      const result = validationResult(req);
      console.log(result);
      if (result.errors.length === 0) {
        next();
      } else {
        let errorObject = new Error();
        let error = result.errors.map((err) => {
          return { [err.param]: err.msg };
        });
        errorObject.message = error;
        next(errorObject);
      }
    },
  ];
};

module.exports = Validation;
