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

  test('should correctly return the number of "Earth years" passsed since a past birthday', () => {
    const pastBirthdayAge = 18; //define a variable for the person's 18th bday
    const yearsSinceBday = age.getYearsPassed(pastBirthdayAge, 'earth');
    expect(yearsSinceBday).toEqual(8);
  });

  test('should correctly return the number of "Mercury years" passsed since a past birthday', () => {
    const pastBirthdayAge = 18;
    const mercuryYearsSinceBday = age.getYearsPassed(pastBirthdayAge, 'mercury'); //specify mercury as the type of years we want to check
    expect(mercuryYearsSinceBday).toEqual(33.33);
  });

  test('should correctly return the number of "Venus years" passsed since a past birthday', () => {
    const pastBirthdayAge = 18;
    const venusYearsSinceBday = age.getYearsPassed(pastBirthdayAge, 'venus'); //specify venus
    expect(venusYearsSinceBday).toEqual(12.9);
  });

})