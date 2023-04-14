import { Age } from './../src/js/age-calculator.js';

describe('Age', () => {
  let age;
  beforeEach(() => {
    age = new Age(26);
  });

  test('should correctly create an age object using an input of earth years', () => {
    // const age = new Age(26);
    expect(age.earthYears).toEqual(26);
  });

  test('should correctly return their age in Mercury years and store it in a new property', () => {
    expect(age.mercuryYears).toEqual(108);
  })

  test('should correctly return their age in Venus years and store it in a new property', () => {
    expect(age.venusYears).toEqual(41);
  });

  test('should correctly return their age in Jupiter years and store it in a new property', () => {
    expect(age.jupiterYears).toEqual(2);
  });

})