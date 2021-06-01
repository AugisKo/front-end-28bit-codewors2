function hexToDec(hexString) {
  return parseInt(hexString, 16);
}

test('Example Tests', () => {
  expect(hexToDec('1')).toBe(1);
  expect(hexToDec('a')).toBe(10);
  expect(hexToDec('10')).toBe(16);
  expect(hexToDec('FF')).toBe(255);
  expect(hexToDec('-C')).toBe(-12);
});

/*Complete the function which converts hex number (given as a string) to a decimal number.*/
