var summation = function (num) {
  let total = 0;
  for (let i = 0; i <= num; i++) {
    total += i;
  }
  return total;
};

test('should return the correct total', function () {
  expect(summation(1)).toBe(1);
  expect(summation(8)).toBe(36);
});
