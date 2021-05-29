Array.prototype.filter = function (func) {
  const ats = [];
  for (let i = 0; i < this.length; i++) {
    const number = this[i];
    if (func(number)) {
      ats.push(number);
    }
  }
  return ats;
};

test('test', () => {
  expect(
    [1, 2, 3, 4].filter((num) => {
      return num > 3;
    })
  ).toStrictEqual([4]);
});

/*

What we want to implement is Array.prototype.filter() function, just like the existing Array.prototype.filter(). 
Another similar function is _.filter() in underscore.js and lodash.js.

The usage will be quite simple, like:

[1, 2, 3, 4, 5].filter(num => num > 3) == [4, 5]
Of course, the existing Array.prototype.filter() function has been undefined for the purposes of this Kata.

describe("Tests", () => {
  it("test", () => {
Test.assertSimilar([1,2,3,4].filter((num)=>{ return num > 3}), [4])

  });
});
*/
