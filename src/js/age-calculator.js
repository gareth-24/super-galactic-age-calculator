//Business Logic

export class Age  {
  constructor(years) {
    this.earthYears = years;
    this.mercuryYears = Math.floor(years/.24);
    //round down to nearest whole year because we want age
    console.log(this.mercuryYears);
  }
}