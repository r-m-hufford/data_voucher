const isPassword = require('./password')

/**
 * 
 * @param {*} string
 * this function does some cool stuff that you will need to do
 * if you want to do cool stuff
 * @returns boolean
 */
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