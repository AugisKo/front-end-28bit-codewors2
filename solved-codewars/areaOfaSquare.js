function squareArea(A) {
  const ats = Math.pow((4 * A) / (2 * Math.PI), 2);
  return Math.round((ats + Number.EPSILON) * 100) / 100;
}

test('squareArea(2)', function () {
  expect(squareArea(2)).toBe(1.62);
  expect(squareArea(0)).toBe(0);
  expect(squareArea(14.05)).toBe(80);
});



<---------------------- KITAS sprendimas ---------------------->

const squareArea = A =>
  Math.round((A / Math.PI) ** 2 * 400) / 100;
  
/*

Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

Graph

Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)

*/
