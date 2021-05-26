function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  if (blueStart > bluePulled || redStart > redPulled) {
    let leftBlue = blueStart - bluePulled;
    let leftRed = redStart - redPulled;

    let probbability = leftBlue / (leftBlue + leftRed);
    return probbability;
  }
  return false;
}

test('test', () => {
  expect(guessBlue(5, 5, 2, 3)).toBe(0.6);
  expect(guessBlue(5, 7, 4, 3)).toBe(0.2);
  expect(guessBlue(12, 18, 4, 6)).toBe(0.4);
});
