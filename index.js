const isPassword = require('./password')

function isPhoneNumber(string) {
  return string === 'phone number';
}

function isDate(string) {
  return string === 'date';
}

module.exports = {
  isPhoneNumber: isPhoneNumber,
  isDate: isDate,
  isPassword: isPassword
}