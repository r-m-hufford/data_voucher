const isPassword = require('./password');

test('does password return true', () => {
  expect(isPassword('password').toBeTruthy)
});

test('does asdf return false', () => {
  expect(isPassword('asdf').toBeFalsy)
});