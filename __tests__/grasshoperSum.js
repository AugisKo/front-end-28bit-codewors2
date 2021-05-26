var summation = function (num) {
  let step = 0;
  let total = 0;
  for (let i = 0; i <= num; i++) {
    step += 1;
    total += step;
  }
  return total;
};

test('should return the correct total', function () {
  expect(summation(1)).toBe(1);
  expect(summation(8)).toBe(36);
});
