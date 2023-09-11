// config/database.js
module.exports = {
    host     : '',
    user     : '',
    password : '',
    database : '',
    typeCast: function (field, next) {
      if (field.type == 'VAR_STRING') {
          return field.string();
      }
      return next();
    }
  };