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
  test('should return 15 when input is "1"', () => {
    expect(add('15')).toBe(15);
  });
});
