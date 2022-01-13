import operate from '../logic/operate';

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  const minNum = Math.ceil(min);
  const maxNum = Math.floor(max);
  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}

describe('addtition (+)', () => {
  test('adding 27 pairs of random integers', () => {
    for (let i = 0; i < 27; i += 1) {
      const num1 = getRandomInt(-100000000, 100000000);
      const num2 = getRandomInt(-100000000, 100000000);
      expect(operate(num1.toString(), num2.toString(), '+')).toBe((num1 + num2).toString());
    }
  });
  test('adding 27 pairs of random floats', () => {
    for (let i = 0; i < 27; i += 1) {
      const num1 = getRandomArbitrary(-100000000, 100000000);
      const num2 = getRandomArbitrary(-100000000, 100000000);
      expect(+operate(num1.toString(), num2.toString(), '+') - (num1 + num2)).toBeLessThan(0.00001);
    }
  });
});

describe('multiplication (*)', () => {
  test('multiplying 27 pairs of random integers', () => {
    for (let i = 0; i < 27; i += 1) {
      const num1 = getRandomInt(-100000000, 100000000);
      const num2 = getRandomInt(-100000000, 100000000);
      expect(operate(num1.toString(), num2.toString(), 'x')).toBe((num1 * num2).toString());
    }
  });
  test('multiplying 27 pairs of random floats', () => {
    for (let i = 0; i < 27; i += 1) {
      const num1 = getRandomArbitrary(-100000000, 100000000);
      const num2 = getRandomArbitrary(-100000000, 100000000);
      expect(+operate(num1.toString(), num2.toString(), 'x') - (num1 * num2)).toBeLessThan(2);
    }
  });
});

describe('division (/)', () => {
  test('dividing 27 pairs of random integers', () => {
    for (let i = 0; i < 27; i += 1) {
      const num1 = getRandomInt(-10000, 10000);
      const num2 = getRandomInt(-10000, 10000);
      expect(operate((num1 * num2).toString(), num2.toString(), '÷')).toBe(num1.toString());
    }
  });
});

describe('addtition (+)', () => {
  test('adding 27 pairs of random integers', () => {
    for (let i = 0; i < 27; i += 1) {
      const num1 = getRandomInt(-100000000, 100000000);
      const num2 = getRandomInt(-100000000, 100000000);
      expect(operate(num1.toString(), num2.toString(), '-')).toBe((num1 - num2).toString());
    }
  });
  test('adding 27 pairs of random floats', () => {
    for (let i = 0; i < 27; i += 1) {
      const num1 = getRandomArbitrary(-100000000, 100000000);
      const num2 = getRandomArbitrary(-100000000, 100000000);
      expect(+operate(num1.toString(), num2.toString(), '-') - (num1 - num2)).toBeLessThan(0.00001);
    }
  });
});
