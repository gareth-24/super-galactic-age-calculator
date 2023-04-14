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
    const yearsSince = this.earthYears - pastAge;
    if (planet === 'earth') {
      return yearsSince;
    } else if (planet === 'mercury')  {
      let exactMercuryYearsSince = yearsSince/0.24; //unrounded decimal
      // console.log(exactMercuryYearsSince);
      const mercuryYearsSince = Math.round(exactMercuryYearsSince*100)/100; //rounded to 2 dec
      // console.log(mercuryYearsSince);
      return mercuryYearsSince;
    } else {
      console.log('error');
    }
  }
}