function positiveSum(arr) {
  let bendraSuma = 0;
  for (let i = 0; i < arr.length; i++) {
    const skaicius = arr[i];
    if (skaicius > 0) {
      bendraSuma += skaicius;
    }
  }
  return bendraSuma;
}

test('Testing for fixed tests', () => {
  expect(positiveSum([1, 2, 3, 4, 5])).toBe(15);
  expect(positiveSum([1, -2, 3, 4, 5])).toBe(13);
  expect(positiveSum([])).toBe(0);
  expect(positiveSum([-1, -2, -3, -4, -5])).toBe(0);
  expect(positiveSum([-1, 2, 3, 4, -5])).toBe(9);
});
