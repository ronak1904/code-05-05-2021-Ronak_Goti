const calculate = require('./calculate');


test('Calculate BMI', () => {
  expect(calculate(82,167)).toBe(29.402273297715947);
});