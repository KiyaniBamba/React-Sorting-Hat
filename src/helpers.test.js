const help = require('./helpers');

describe('sum function', () => {
    it('sums two integers', () => {
      const expected = 0;
      const actual = help.sum(0, 0);
      expect(actual).toBe(expected); // .toBe() looks for strict equality!
    });
  }); 