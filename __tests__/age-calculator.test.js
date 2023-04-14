import { Age } from './../src/js/age-calculator.js';

describe('Age', () => {
  
  test('should correctly create an age object using an input of earth years', () => {
    const age = new Age(26);
    expect(age.earthYears).toEqual(26);
  });
})