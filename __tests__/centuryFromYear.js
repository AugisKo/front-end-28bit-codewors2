function century(year) {
  let a = year / 100;
  let b = Math.floor(a);
  if ((a = b)) {
    return a;
  }
  console.log(b + 1);
  return b + 1;
}

test('test', () => {
  expect(century(1705)).toBe(18, 'Testing for year 1705');
  expect(century(1900)).toBe(19, 'Testing for year 1900');
  expect(century(1601)).toBe(17, 'Testing for year 1601');
  expect(century(2000)).toBe(20, 'Testing for year 2000');
  expect(century(89)), toBe(1, 'Testing for year 89');
});

/*
Introduction
The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

Task :
Given a year, return the century it is in.

Input , Output Examples :
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
Hope you enjoy it .. Awaiting for Best Practice Codes

Enjoy Learning !!!
*/
