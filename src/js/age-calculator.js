//Business Logic

export class Age  {
  constructor(years) {
    this.earthYears = years;
    this.mercuryYears = Math.floor(years/.24);
    //round down to nearest whole year because we want age
    // console.log(this.mercuryYears);
    this.venusYears = Math.floor(years/.62);
    this.marsYears = Math.floor(years/1.88);
    this.jupiterYears = Math.floor(years/11.86);
    // console.log(this);
  }

  getYearsPassed(pastAge, planet)  {
    const yearsSince = this.earthYears - pastAge;
    if (planet === 'earth') {
      return yearsSince;
    } else if (planet === 'mercury')  {
      let exactMercuryYearsSince = yearsSince/0.24; //unrounded decimal
      // console.log(exactMercuryYearsSince);
      const mercuryYearsSince = Math.round(exactMercuryYearsSince*100)/100; //rounded to 2 dec
      // console.log(mercuryYearsSince);
      return mercuryYearsSince;
    } else if (planet === 'venus') {
      let exactVenusYrsSince = yearsSince/.62;
      const venusYearsSince = Math.round(exactVenusYrsSince*100)/100;
      return venusYearsSince;
    } else if (planet === 'mars') {
      let exactMarsYrsSince = yearsSince/1.88;
      const marsYearsSince = Math.round(exactMarsYrsSince*100)/100;
      return marsYearsSince;
    } else if (planet === 'jupiter') {
      let exactJupiterYrsSince = yearsSince/11.86;
      const jupiterYearsSince = Math.round(exactJupiterYrsSince*100)/100;
      return jupiterYearsSince;
    } else {
      // console.log('error');
      return false;
    }
  }

  getYearsUntil(futureAge, planet) {
    const yearsUntil = futureAge - this.earthYears;
    
    const roundNum = (exactNumber) =>  {
      return Math.round(exactNumber*100)/100;
    };

    if (planet === 'earth') {
      return yearsUntil;
    } else if (planet === 'mercury')  {
      const mercuryYearsUntil = yearsUntil/0.24;
      return roundNum(mercuryYearsUntil);
    }
  }
}