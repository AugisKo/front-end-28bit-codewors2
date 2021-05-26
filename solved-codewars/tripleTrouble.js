function tripleTrouble(one, two, three) {
  let zodis = '';
  for (let i = 0; i < one.length; i++) {
    zodis += one[i] + two[i] + three[i];
    console.log(one[i], two[i], three[i]);
    console.log(zodis);
  }
  return zodis;
}

test('test', () => {
  expect(tripleTrouble('this', 'test', 'lock')).toBe('ttlheoiscstk');
  expect(tripleTrouble('aa', 'bb', 'cc')).toBe('abcabc');
  expect(tripleTrouble('Bm', 'aa', 'tn')).toBe('Batman');
  expect(tripleTrouble('LLh', 'euo', 'xtr')).toBe('LexLuthor');
});
