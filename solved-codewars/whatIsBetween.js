function between(a, b) {
  var str = [];
  for (let i = a; i <= b; i++) {
    str.push(i);
  }
  //const ats = Array.from(String(str), Number);
  return str;
}

test('Basic tests', () => {
  expect(between(1, 4)).toStrictEqual([1, 2, 3, 4]);
  expect(between(-2, 2)).toStrictEqual([-2, -1, 0, 1, 2]);
});

/*
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]
*/
