import { Age } from './../src/js/age-calculator.js';

describe('Age', () => {
  let age;
  beforeEach(() => {
    age = new Age(26);
  });

  test('should correctly create an age object using an input of earth years', () => {
    expect(age.earthYears).toEqual(26);
  });

  test('should correctly return their age in Mercury years and store it in a new property', () => {
    expect(age.mercuryYears).toEqual(108);
  });

  test('should correctly return their age in Venus years and store it in a new property', () => {
    expect(age.venusYears).toEqual(41);
  });

  test('should correctly return their age in Mars years and store it in a new property', () => {
    expect(age.marsYears).toEqual(13);
  });

  test('should correctly return their age in Jupiter years and store it in a new property', () => {
    expect(age.jupiterYears).toEqual(2);
  });
});

describe('getYearsPassed', () => {
  let age;    //define variable for the person's age for each test
  const pastBirthdayAge = 18;   //variable for the person's 18th bday
  beforeEach(() => {
    age = new Age(26);  
  });

  test('should correctly return the number of "Earth years" passsed since a past birthday', () => {
    const yearsSinceBday = age.getYearsPassed(pastBirthdayAge, 'earth');
    expect(yearsSinceBday).toEqual(8);
  });

  test('should correctly return the number of "Mercury years" passsed since a past birthday', () => {
    const mercuryYearsSinceBday = age.getYearsPassed(pastBirthdayAge, 'mercury'); //specify mercury as the type of years we want to check
    expect(mercuryYearsSinceBday).toEqual(33.33);
  });

  test('should correctly return the number of "Venus years" passsed since a past birthday', () => {
    const venusYearsSinceBday = age.getYearsPassed(pastBirthdayAge, 'venus'); //specify venus
    expect(venusYearsSinceBday).toEqual(12.9);
  });

  test('should correctly return the number of "Mars years" passsed since a past birthday', () => {
    const marsYearsSinceBday = age.getYearsPassed(pastBirthdayAge, 'mars'); //specify mars
    expect(marsYearsSinceBday).toEqual(4.26);
  });

  test('should correctly return the number of "Jupiter years" passsed since a past birthday', () => {
    const jupiterYearsSinceBday = age.getYearsPassed(pastBirthdayAge, 'jupiter'); //specify jupiter
    expect(jupiterYearsSinceBday).toEqual(.67);
  });

  test('should correctly return false if the .getYearsPassed method is called with an invalid argument for the type of planet', () => {
    //checks that this method handles errors for a planet that is not defined in our logic
    expect(age.getYearsPassed(18, 'nebula')).toEqual(false);
  });
});

describe('getYearsUntil', () => {
  let age;
  const futureBirthday = 31;    //variable for the future birthday
  beforeEach(() => {
    age = new Age(26);
  });

  test('should correctly return the number of earth years until the future birthday', () => {
    const yearsToFutureBday = age.getYearsUntil(futureBirthday, 'earth');
    expect(yearsToFutureBday).toEqual(5);
  });

  test('should correctly return the number of "Mercury years" until the future birthday', () => {
    const mercuryYearsToFutureBday = age.getYearsUntil(futureBirthday, 'mercury');
    expect(mercuryYearsToFutureBday).toEqual(20.83);
  });

  test('should correctly return the number of "Venus years" until the future birthday', () => {
    const venusYearsToFutureBday = age.getYearsUntil(futureBirthday, 'venus');
    expect(venusYearsToFutureBday).toEqual(8.06);
  });

  test('should correctly return the number of "Mars years" until the future birthday', () => {
    const marsYearsToFutureBday = age.getYearsUntil(futureBirthday, 'mars');
    expect(marsYearsToFutureBday).toEqual(2.66);
  });

  test('should correctly return the number of "Jupiter years" until the future birthday', () => {
    const jupiterYearsToFutureBday = age.getYearsUntil(futureBirthday, 'jupiter');
    expect(jupiterYearsToFutureBday).toEqual(.42);
  });

  test('should correctly return false if the .getYearsUntil method is called with an invalid argument for the type of planet', () => {
    //checks error handling for invalid planet
    expect(age.getYearsUntil(31,'tatooine')).toEqual(false);
  });
});