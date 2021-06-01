function pointsPer48(ppg, mpg) {
  if (ppg === 0 || mpg === 0) {
    return 0;
  }
  var num = (ppg / mpg) * 48;
  const ans = num.toFixed(1);
  return parseFloat(ans);
}

test('should test for something', () => {
  expect(pointsPer48(12, 20)).toBe(28.8);
  expect(pointsPer48(10, 10)).toBe(48.0);
  expect(pointsPer48(5, 17)).toBe(14.1);
  expect(pointsPer48(0, 0)).toBe(0);
  expect(pointsPer48(30.8, 34.7)).toBe(42.6); // Russell Westbrook 1/15/17
  expect(pointsPer48(22.9, 33.8)).toBe(32.5); // Kemba Walker 1/15/17
});


<-------------------- Kitas budas ------------------------->

function pointsPer48(ppg, mpg) {
  var num = (48/mpg) * ppg
  return +num.toFixed(1) || 0
}
/*
An NBA game runs 48 minutes (Four 12 minute quarters). Players do not typically play the full game, subbing in and out as necessary. Your job is to extrapolate a player's points per game if they played the full 48 minutes.

Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.

Examples:

pointsPer48(12, 20) // 28.8
pointsPer48(10, 10) // 48 
pointsPer48(5, 17) // 14.1 
pointsPer48(0, 0) // 0
Notes:
All inputs will be either be an integer or float.
Follow your dreams!*/