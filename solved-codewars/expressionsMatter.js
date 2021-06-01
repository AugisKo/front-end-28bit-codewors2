function expressionMatter(a, b, c) {
  const x1 = a * (b + c);
  const x2 = a * b * c;
  const x3 = a + b * c;
  const x4 = (a + b) * c;
  const x5 = a + b + c;
  return Math.max(x1, x2, x3, x4, x5); // highest achievable result
}

test('Small values', function () {
  expect(expressionMatter(2, 1, 2)).toBe(6);
  expect(expressionMatter(2, 1, 1)).toBe(4);
  expect(expressionMatter(1, 1, 1)).toBe(3);
  expect(expressionMatter(1, 2, 3)).toBe(9);
  expect(expressionMatter(1, 3, 1)).toBe(5);
  expect(expressionMatter(2, 2, 2)).toBe(8);
  expect(expressionMatter(5, 1, 3)).toBe(20);
  expect(expressionMatter(3, 5, 7)).toBe(105);
  expect(expressionMatter(5, 6, 1)).toBe(35);
  expect(expressionMatter(1, 6, 1)).toBe(8);
  expect(expressionMatter(2, 6, 1)).toBe(14);
  expect(expressionMatter(6, 7, 1)).toBe(48);
  expect(expressionMatter(2, 10, 3)).toBe(60);
  expect(expressionMatter(1, 8, 3)).toBe(27);
  expect(expressionMatter(9, 7, 2)).toBe(126);
  expect(expressionMatter(1, 1, 10)).toBe(20);
  expect(expressionMatter(9, 1, 1)).toBe(18);
  expect(expressionMatter(10, 5, 6)).toBe(300);
  expect(expressionMatter(1, 10, 1)).toBe(12);
});

/*Task
Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained
Consider an Example :
With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

1 * (2 + 3) = 5
1 * 2 * 3 = 6
1 + 2 * 3 = 7
(1 + 2) * 3 = 9
So the maximum value that you can obtain is 9.

Notes
The numbers are always positive.
The numbers are in the range (1  ≤  a, b, c  ≤  10).
You can use the same operation more than once.
It's not necessary to place all the signs and brackets.
Repetition in numbers may occur .
You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.
Input >> Output Examples:
expressionsMatter(1,2,3)  ==>  return 9
Explanation:
After placing signs and brackets, the Maximum value obtained from the expression (1+2) * 3 = 9.

expressionsMatter(1,1,1)  ==>  return 3
Explanation:
After placing signs, the Maximum value obtained from the expression is 1 + 1 + 1 = 3.

expressionsMatter(9,1,1)  ==>  return 18
Explanation:
After placing signs and brackets, the Maximum value obtained from the expression is 9 * (1+1) = 18. */
