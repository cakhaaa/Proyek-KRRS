const joi = require('joi');

module.exports = {

  login: {
    body: {
      email: joi.string().email().required(),
      password: joi.string().required(),
    },
  },
};
