//Business Logic

export class Age  {
  constructor(years) {
    this.earthYears = years;
    this.mercuryYears = Math.floor(years/.24);
    //round down to nearest whole year because we want age
    // console.log(this.mercuryYears);
    this.venusYears = Math.floor(years/.62);
    this.jupiterYears = Math.floor(years/11.86);
    // console.log(this);
  }

  getYearsPassed(pastAge, planet)  {
    if (planet === 'earth') {
      const yearsSince = this.earthYears - pastAge;
      return yearsSince;
    } else {
      console.log('error');
    }
  }
}