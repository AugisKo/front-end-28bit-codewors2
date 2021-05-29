function logicalCalc(array, op) {
  if (op === 'AND') {
    let tarpAts = array[0];
    for (let i = 1; i < array.length; i++) {
      tarpAts = tarpAts && array[i];
    }
    return tarpAts;
  }

  if (op === 'OR') {
    let tarpAts = array[0];
    for (let i = 1; i < array.length; i++) {
      tarpAts = tarpAts || array[i];
    }
    return tarpAts;
  }
  if (op === 'XOR') {
    let tarpAts = array[0];
    for (let i = 1; i < array.length; i++) {
      tarpAts = tarpAts !== array[i];
    }
    return tarpAts;
  }
}

test('Fixed Tests', function () {
  expect(logicalCalc([true, true, true, false], 'AND')).toBe(false);
  expect(logicalCalc([true, true, true, false], 'OR')).toBe(true);
  expect(logicalCalc([true, true, true, false], 'XOR')).toBe(true);
  expect(logicalCalc([true, true, false, false], 'AND')).toBe(false);
  expect(logicalCalc([true, true, false, false], 'OR')).toBe(true);
  expect(logicalCalc([true, true, false, false], 'XOR')).toBe(false);
  expect(logicalCalc([true, false, false, false], 'AND')).toBe(false);
  expect(logicalCalc([true, false, false, false], 'OR')).toBe(true);
  expect(logicalCalc([true, false, false, false], 'XOR')).toBe(true);
  expect(logicalCalc([true, true], 'AND')).toBe(true);
  expect(logicalCalc([true, true], 'OR')).toBe(true);
  expect(logicalCalc([true, true], 'XOR')).toBe(false);
  expect(logicalCalc([false, false], 'AND')).toBe(false);
  expect(logicalCalc([false, false], 'OR')).toBe(false);
  expect(logicalCalc([false, false], 'XOR')).toBe(false);
  expect(logicalCalc([false], 'AND')).toBe(false);
  expect(logicalCalc([false], 'OR')).toBe(false);
  expect(logicalCalc([false], 'XOR')).toBe(false);
  expect(logicalCalc([true], 'AND')).toBe(true);
  expect(logicalCalc([true], 'OR')).toBe(true);
  expect(logicalCalc([true], 'XOR')).toBe(true);
});

<_---------------- KITI sprendimo budai ------------------>

function logicalCalc(array, op){
  var op = {AND:"&&",OR:"||",XOR:"!="}[op];
  return array.reduce((a,b)=>eval(`${a}${op}${b}`))
}
------------------------------------------------------------
const logicalCalc = (array, op) => {
  if (op == "AND") return array.reduce((a, b) => a && b);
  if (op == "OR") return array.reduce((a, b) => a || b);
  if ((op = "XOR")) return array.reduce((a, b) => a ^ b) == 0 ? false : true;
};



/*Your Task
Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

Examples
booleans = [True, True, False], operator = "AND"
True AND True -> True
True AND False -> False
return False
booleans = [True, True, False], operator = "OR"
True OR True -> True
True OR False -> True
return True
booleans = [True, True, False], operator = "XOR"
True XOR True -> False
False XOR False -> False
return False
Input
an array of Boolean values (1 <= array_length <= 50)
a string specifying a logical operator: "AND", "OR", "XOR"
Output
A Boolean value (True or False).

*/
