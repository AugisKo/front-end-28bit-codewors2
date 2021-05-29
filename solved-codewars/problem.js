function problem(x) {
  if (typeof x === 'string') {
    return 'Error';
  } else {
    return x * 50 + 6;
  }
}

test('Basic tests', () => {
  expect(problem('hello')).toBe('Error');
  expect(problem(1)).toBe(56);
  expect(problem(5)).toBe(256);
  expect(problem(0)).toBe(6);
  expect(problem(1.2)).toBe(66);
  expect(problem(3)).toBe(156);
  expect(problem('RyanIsCool')).toBe('Error');
  expect(problem(-3)).toBe(-144);
  expect(problem('')).toBe('Error');
  expect(problem(0.03)).toBe(7.5);
});


<------------------ Kitas sprendimo metodas ------------------>

function problem(x){
  return typeof x === "number" ? x * 50 + 6 : "Error";
}

/*
Make a function that returns the value multiplied by 50 and increased by 6. 
If the value entered is a string it should return "Error".
*\