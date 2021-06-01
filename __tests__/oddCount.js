function oddCount(n) {
  return Math.floor(n / 2);
}

test('test', () => {
  expect(oddCount(15)).toBe(7, 'Oops! Wrong.');
  expect(oddCount(15023)).toBe(7511, 'Oops! Wrong.');
});
/*
  Given a number n, return the number of positive odd numbers below n, EASY!

oddCount(7) //=> 3, i.e [1, 3, 5]
oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]
Expect large Inputs!
*/
