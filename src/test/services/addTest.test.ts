import add from '../../services/add';

describe('String Calculator', () => {
  // This will check if args is empty, and return zero.
  test('should return 0 for an empty string', () => {
    expect(add('')).toBe(0);
  });
  //   To check if there is only one number
  test('should return 1 when input is "1"', () => {
    expect(add('1')).toBe(1);
  });
  //   to check if there is one number with more than one digit
  test('should return 15 when input is "15"', () => {
    expect(add('15')).toBe(15);
  });
  //   to check if there are multiple numbers and custome delimiters
  test('should return 20 when input is "1,2,3,4,5,5"', () => {
    expect(add('1,2,3,4,5,5')).toBe(20);
  });
  test('should return 6 for input "1\\n2,3"', () => {
    expect(add('1\n2,3')).toBe(6);
  });
  test('should support custom delimiter ";" and return 3', () => {
    expect(add('//;\n1;2')).toBe(3);
  });
});
