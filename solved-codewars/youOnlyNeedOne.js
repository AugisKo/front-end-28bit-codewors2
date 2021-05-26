function check(a, x) {
  for (let i = 0; i < a.length; i++) {
    if (x === a[i]) {
      return true;
    }
  }
  return false;
}

test('reikalingi', () => {
  expect(check([66, 101], 66)).toBe(true);
  expect(check([80, 117, 115, 104, 45, 85, 112, 115], 45)).toBe(true);
  expect(check(['t', 'e', 's', 't'], 'e')).toBe(true);
  expect(check(['what', 'a', 'great', 'kata'], 'kat')).toBe(false);
});
