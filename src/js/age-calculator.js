//Business Logic

export class Age  {
  constructor(years) {
    this.earthYears = years;
    this.mercuryYears = 0;
    this.venusYears = 0;
    this.marsYears = 0;
    this.jupiterYears = 0;
  }

  getPlanetaryAge() {
    //round down because we are calculating an age
    this.mercuryYears = Math.floor(this.earthYears/.24);
    this.venusYears = Math.floor(this.earthYears/.62);
    this.marsYears = Math.floor(this.earthYears/1.88);
    this.jupiterYears = Math.floor(this.earthYears/11.86);
  }

  getYearsPassed(pastAge, planet)  {
    const yearsSince = this.earthYears - pastAge;

    const roundNum = (exactNumber) =>  {
      return Math.round(exactNumber*100)/100;
    };  //rounds the input number to 2 decimals

    if (planet === 'earth') {
      return yearsSince;
    } else if (planet === 'mercury')  {
      const mercuryYearsSince = yearsSince/0.24; //unrounded decimal
      return roundNum(mercuryYearsSince);
    } else if (planet === 'venus') {
      const venusYearsSince = yearsSince/.62;
      return roundNum(venusYearsSince);
    } else if (planet === 'mars') {
      const marsYearsSince = yearsSince/1.88;
      return roundNum(marsYearsSince);
    } else if (planet === 'jupiter') {
      const jupiterYearsSince = yearsSince/11.86;
      return roundNum(jupiterYearsSince);
    } else {
      return false;
    }
  }

  getYearsUntil(futureAge, planet) {
    const yearsUntil = futureAge - this.earthYears;

    const roundNum = (exactNumber) =>  {
      return Math.round(exactNumber*100)/100;
    };  //rounds the input number to 2 decimals

    if (planet === 'earth') {
      return yearsUntil;
    } else if (planet === 'mercury')  {
      const mercuryYearsUntil = yearsUntil/.24;
      return roundNum(mercuryYearsUntil);
    } else if (planet === 'venus')  {
      const venusYearsUntil = yearsUntil/.62;
      return roundNum(venusYearsUntil);
    } else if (planet === 'mars')  {
      const marsYearsUntil = yearsUntil/1.88;
      return roundNum(marsYearsUntil);
    } else if (planet === 'jupiter')  {
      const jupiterYearsUntil = yearsUntil/11.86;
      return roundNum(jupiterYearsUntil);
    } else  {
      return false;
    }
  }
}