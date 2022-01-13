import calculate from '../logic/calculate';

describe('calculate()', () => {
  test('multiplication', () => {
    let state = {};
    state = { ...state, ...calculate(state, '7') };
    state = { ...state, ...calculate(state, '9') };
    state = { ...state, ...calculate(state, '3') };
    state = { ...state, ...calculate(state, 'x') };
    state = { ...state, ...calculate(state, '1') };
    state = { ...state, ...calculate(state, '3') };
    state = { ...state, ...calculate(state, '5') };
    state = { ...state, ...calculate(state, '=') };
    expect(state.total).toBe((793 * 135).toString());
  });

  test('addition', () => {
    let state = {};
    state = { ...state, ...calculate(state, '5') };
    state = { ...state, ...calculate(state, '1') };
    state = { ...state, ...calculate(state, '3') };
    state = { ...state, ...calculate(state, '+') };
    state = { ...state, ...calculate(state, '8') };
    state = { ...state, ...calculate(state, '4') };
    state = { ...state, ...calculate(state, '=') };
    expect(state.total).toBe((513 + 84).toString());
  });

  test('modulo', () => {
    let state = {};
    state = { ...state, ...calculate(state, '5') };
    state = { ...state, ...calculate(state, '4') };
    state = { ...state, ...calculate(state, '1') };
    state = { ...state, ...calculate(state, '%') };
    state = { ...state, ...calculate(state, '3') };
    state = { ...state, ...calculate(state, '4') };
    state = { ...state, ...calculate(state, '=') };
    expect(state.total).toBe((541 % 34).toString());
  });

  test('negation', () => {
    let state = {};
    state = { ...state, ...calculate(state, '8') };
    state = { ...state, ...calculate(state, '7') };
    state = { ...state, ...calculate(state, '6') };
    state = { ...state, ...calculate(state, '5') };
    state = { ...state, ...calculate(state, '+/-') };
    state = { ...state, ...calculate(state, '+') };
    state = { ...state, ...calculate(state, '5') };
    state = { ...state, ...calculate(state, '=') };
    expect(state.total).toBe((-8765 + 5).toString());
  });

  test('subtraction', () => {
    let state = {};
    state = { ...state, ...calculate(state, '5') };
    state = { ...state, ...calculate(state, '1') };
    state = { ...state, ...calculate(state, '3') };
    state = { ...state, ...calculate(state, '-') };
    state = { ...state, ...calculate(state, '8') };
    state = { ...state, ...calculate(state, '4') };
    state = { ...state, ...calculate(state, '=') };
    expect(state.total).toBe((513 - 84).toString());
    state = { ...state, ...calculate(state, 'AC') };
    expect(state.total).toBe(null);
  });
});
